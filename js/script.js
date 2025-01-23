import goFlashcards from './data.js';
import jsFlashcards from './dataJS.js';

// Combine both flashcard sets
const flashcards = [...goFlashcards, ...jsFlashcards];

// Remova a linha de import e use diretamente os dados
const allFlashcards = [...goFlashcards, ...jsFlashcards];

// DOM elements
const flashcardElement = document.getElementById('flashcard');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const shuffleButton = document.getElementById('shuffleBtn');
const progressElement = document.getElementById('progress');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const languageFilter = document.getElementById('languageFilter');
const categoryFilter = document.getElementById('categoryFilter');

// Adicionar novos elementos DOM
const timerElement = document.getElementById('timer');
const avgTimeElement = document.getElementById('avgTime');
const studiedCardsElement = document.getElementById('studiedCards');
const streakElement = document.getElementById('streak');
const progressFill = document.getElementById('progressFill');

// Add new DOM elements
const quizOptions = document.getElementById('quizOptions');
const answerFeedback = document.getElementById('answerFeedback');
const cardModeBtn = document.getElementById('cardMode');
const quizModeBtn = document.getElementById('quizMode');

// State
let currentIndex = 0;
let cards = [...allFlashcards];
let difficultyRatings = JSON.parse(localStorage.getItem('flashcardDifficulty')) || {};
let currentLanguage = 'all';
let currentCategory = 'all';

// Adicionar estado para estatísticas
let startTime = Date.now();
let cardTimes = [];
let studiedCount = parseInt(localStorage.getItem('studiedCount')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;

// Modify state
let isAnswered = false;
let correctAnswer = '';
let currentMode = localStorage.getItem('studyMode') || 'card';

// Add to state section
let wrongAnswers = [];

// Functions
function updateCard() {
    if (cards.length === 0) {
        questionElement.textContent = 'Nenhum card disponível';
        answerElement.textContent = 'Ajuste os filtros';
        return;
    }

    const currentCard = cards[currentIndex];
    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;
    progressElement.textContent = `Card ${currentIndex + 1} of ${cards.length}`;
    
    // Update progress bar
    const progress = ((currentIndex + 1) / cards.length) * 100;
    progressFill.style.width = `${progress}%`;

    if (currentMode === 'quiz') {
        generateQuizOptions(currentCard);
        answerFeedback.textContent = '';
        isAnswered = false;
    }
    
    // Update difficulty buttons
    difficultyButtons.forEach(btn => {
        const difficulty = btn.dataset.difficulty;
        btn.classList.toggle('active', difficultyRatings[currentCard.id] === difficulty);
    });
}

function getUniqueValues(property, cards = flashcards) {
    return ['all', ...new Set(cards.map(card => card[property]))];
}

function updateCategoryFilter() {
    const filteredCards = currentLanguage === 'all' 
        ? flashcards 
        : flashcards.filter(card => card.language.toLowerCase() === currentLanguage.toLowerCase());
    
    const categories = getUniqueValues('category', filteredCards);
    
    categoryFilter.innerHTML = categories.map(category =>
        `<option value="${category.toLowerCase()}">${
            category === 'all' ? 'Todas Categorias' : category
        }</option>`
    ).join('');
}

function populateFilters() {
    const languages = getUniqueValues('language');

    languageFilter.innerHTML = languages.map(language =>
        `<option value="${language.toLowerCase()}">${
            language === 'all' ? 'Todas Linguagens' : language
        }</option>`
    ).join('');

    updateCategoryFilter();
}

function filterCards() {
    cards = flashcards.filter(card => {
        const matchesLanguage = currentLanguage === 'all' || 
            card.language.toLowerCase() === currentLanguage.toLowerCase();
        const matchesCategory = currentCategory === 'all' || 
            card.category.toLowerCase() === currentCategory.toLowerCase();
        return matchesLanguage && matchesCategory;
    });

    currentIndex = 0;
    if (cards.length === 0) {
        cards = [{ 
            id: 'empty', 
            question: 'No cards found for the selected filters', 
            answer: 'Try selecting different filters' 
        }];
    }
    updateCard();
}

function nextCard() {
    if (currentMode === 'quiz' && !isAnswered) {
        alert('Por favor, responda a questão atual primeiro!');
        return;
    }
    
    flashcardElement.classList.remove('flipped');
    currentIndex = (currentIndex + 1) % cards.length;
    
    // Update progress only when moving to next card
    studiedCount++;
    localStorage.setItem('studiedCount', studiedCount);
    studiedCardsElement.textContent = studiedCount;
    
    // Update progress bar
    const progress = (studiedCount % cards.length) / cards.length * 100;
    progressFill.style.width = `${progress}%`;
    
    resetTimer();
    updateCard();
}

function previousCard() {
    flashcardElement.classList.remove('flipped');
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    resetTimer();
    updateCard();
}

function shuffleCards() {
    cards = [...cards].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    flashcardElement.classList.remove('flipped');
    updateCard();
}

function setDifficulty(difficulty) {
    const currentCard = cards[currentIndex];
    difficultyRatings[currentCard.id] = difficulty;
    localStorage.setItem('flashcardDifficulty', JSON.stringify(difficultyRatings));
    updateStats(difficulty);
    updateCard();
}

function startTimer() {
    startTime = Date.now();
    updateTimer();
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function resetTimer() {
    startTime = Date.now();
}

function updateStats(difficulty) {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    cardTimes.push(timeSpent);
    
    studiedCount++;
    localStorage.setItem('studiedCount', studiedCount);
    studiedCardsElement.textContent = studiedCount;
    
    const avgTime = Math.floor(cardTimes.reduce((a, b) => a + b, 0) / cardTimes.length);
    avgTimeElement.textContent = `${avgTime}s`;
    
    if (difficulty === 'easy') {
        streak++;
    } else {
        streak = 0;
    }
    
    localStorage.setItem('streak', streak);
    streakElement.textContent = streak;

    // Atualizar barra de progresso
    const progress = (studiedCount % cards.length) / cards.length * 100;
    progressFill.style.width = `${progress}%`;
}

function celebrateSuccess() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function generateQuizOptions(currentCard) {
    // Get 3 random wrong answers from other cards
    const wrongAnswers = cards
        .filter(card => card.id !== currentCard.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(card => card.answer);

    // Combine correct and wrong answers, shuffle them
    const options = [currentCard.answer, ...wrongAnswers]
        .sort(() => Math.random() - 0.5);

    correctAnswer = currentCard.answer;

    // Generate HTML for options with data-option attribute
    quizOptions.innerHTML = options.map((option, index) => `
        <button class="quiz-option" data-answer="${option}" data-option="${String.fromCharCode(65 + index)}">
            ${option}
        </button>
    `).join('');

    // Add click listeners to options
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.addEventListener('click', handleAnswer);
    });
}

function handleAnswer(e) {
    if (isAnswered) return;
    
    const selectedAnswer = e.target.dataset.answer;
    const isCorrect = selectedAnswer === correctAnswer;
    
    // Visual feedback
    e.target.classList.add(isCorrect ? 'correct' : 'wrong');
    if (!isCorrect) {
        document.querySelector(`[data-answer="${correctAnswer}"]`)
            .classList.add('correct');
        // Add wrong answer to the list
        wrongAnswers.push({
            question: cards[currentIndex].question,
            userAnswer: selectedAnswer,
            correctAnswer: correctAnswer
        });
        // Update wrong answers display
        updateWrongAnswersCount();
    }
    
    // Update feedback
    answerFeedback.textContent = isCorrect ? 'Correto! 🎉' : 'Incorreto! 😕';
    answerFeedback.className = `answer-feedback ${isCorrect ? 'correct' : 'wrong'} show`;
    
    isAnswered = true;
}

function updateWrongAnswersCount() {
    const wrongAnswersElement = document.getElementById('streak'); // reusing streak element
    wrongAnswersElement.textContent = wrongAnswers.length;
    const wrongAnswersLabel = wrongAnswersElement.previousElementSibling;
    wrongAnswersLabel.textContent = 'Respostas Erradas';
}

function setStudyMode(mode) {
    currentMode = mode;
    localStorage.setItem('studyMode', mode);
    document.body.setAttribute('data-mode', mode);
    
    // Update UI
    cardModeBtn.classList.toggle('active', mode === 'card');
    quizModeBtn.classList.toggle('active', mode === 'quiz');
    
    // Reset state
    isAnswered = false;
    flashcardElement.classList.remove('flipped');
    
    // Update card display
    updateCard();
}

// Event listeners
flashcardElement.addEventListener('click', () => {
    flashcardElement.classList.toggle('flipped');
});

prevButton.addEventListener('click', previousCard);
nextButton.addEventListener('click', nextCard);
shuffleButton.addEventListener('click', shuffleCards);

difficultyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        setDifficulty(e.target.dataset.difficulty);
    });
});

languageFilter.addEventListener('change', (e) => {
    currentLanguage = e.target.value;
    currentCategory = 'all'; // Reset category selection when language changes
    updateCategoryFilter();
    filterCards();
});

categoryFilter.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    filterCards();
});

cardModeBtn.addEventListener('click', () => setStudyMode('card'));
quizModeBtn.addEventListener('click', () => setStudyMode('quiz'));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') previousCard();
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === ' ') flashcardElement.classList.toggle('flipped');
});

// Initialize
populateFilters();
filterCards();
initializeStats();
resetTimer();
setInterval(updateTimer, 1000);
setStudyMode(currentMode);

// Update initialization
document.addEventListener('DOMContentLoaded', () => {
    // ...existing initialization code...
    updateWrongAnswersCount();
});