// Remova as linhas de import
const allFlashcards = [...window.goFlashcards, ...window.jsFlashcards];

// DOM elements
const questionElement = document.getElementById('question');
const quizOptions = document.getElementById('quizOptions');
const answerFeedback = document.getElementById('answerFeedback');
const nextButton = document.getElementById('nextBtn');
const progressElement = document.getElementById('progress');
const languageFilter = document.getElementById('languageFilter');
const categoryFilter = document.getElementById('categoryFilter');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const correctAnswersElement = document.getElementById('correctAnswers');
const totalQuestionsElement = document.getElementById('totalQuestions');
const streakElement = document.getElementById('streak');
const progressFill = document.getElementById('progressFill');

// State
let currentIndex = 0;
let cards = [...allFlashcards];
let isAnswered = false;
let correctAnswer = '';
let correctCount = 0;
let streak = 0;
let wrongCount = 0;

function updateQuiz() {
    if (!cards || cards.length === 0) {
        questionElement.textContent = 'Nenhuma questão disponível';
        return;
    }

    const currentCard = cards[currentIndex];
    questionElement.textContent = currentCard.question;
    generateQuizOptions(currentCard);
    
    progressElement.textContent = `Questão ${currentIndex + 1} de ${cards.length}`;
    totalQuestionsElement.textContent = cards.length;
    
    const progress = ((currentIndex + 1) / cards.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function generateQuizOptions(currentCard) {
    // Get random wrong answers
    const wrongAnswers = cards
        .filter(card => card.id !== currentCard.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3)
        .map(card => card.answer);

    // Combine and shuffle options
    const options = [currentCard.answer, ...wrongAnswers]
        .sort(() => Math.random() - 0.5);

    correctAnswer = currentCard.answer;

    // Create option buttons
    quizOptions.innerHTML = options.map((option, index) => `
        <button class="quiz-option" data-answer="${option}">
            ${String.fromCharCode(65 + index)}. ${option}
        </button>
    `).join('');

    // Add click listeners
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
        document.querySelector(`[data-answer="${correctAnswer}"]`)?.classList.add('correct');
        wrongCount++;
        document.getElementById('streak').textContent = wrongCount;
    } else {
        correctCount++;
        document.getElementById('correctAnswers').textContent = correctCount;
    }
    
    // Update feedback
    answerFeedback.textContent = isCorrect ? 'Correto! 🎉' : 'Incorreto! 😕';
    answerFeedback.className = `answer-feedback ${isCorrect ? 'correct' : 'wrong'} show`;
    
    isAnswered = true;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('correctAnswers').textContent = '0';
    document.getElementById('streak').textContent = '0';
    document.getElementById('totalQuestions').textContent = cards.length.toString();
    updateQuiz();
    
    nextButton.addEventListener('click', () => {
        if (!isAnswered) {
            alert('Por favor, responda a questão atual primeiro!');
            return;
        }
        
        currentIndex = (currentIndex + 1) % cards.length;
        isAnswered = false;
        answerFeedback.textContent = '';
        updateQuiz();
    });

    // Initialize elements and event listeners
    initializeElements();
    addEventListeners();
    populateFilters();
    filterCards();
});

// ... rest of existing code ...
