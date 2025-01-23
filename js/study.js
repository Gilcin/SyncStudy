// State
let currentIndex = 0;
let cards = [];
let studiedCount = parseInt(localStorage.getItem('studiedCount')) || 0;
let streak = parseInt(localStorage.getItem('streak')) || 0;
let currentLanguage = 'all';
let currentCategory = 'all';
let startTime = Date.now();
let cardTimes = [];

// DOM Elements
const flashcardElement = document.querySelector('.flashcard');
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');
const shuffleButton = document.getElementById('shuffleBtn');
const progressElement = document.getElementById('progress');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const languageFilter = document.getElementById('languageFilter');
const categoryFilter = document.getElementById('categoryFilter');
const progressFill = document.getElementById('progressFill');
const studiedCardsElement = document.getElementById('studiedCards');
const streakElement = document.getElementById('streak');
const avgTimeElement = document.getElementById('avgTime');
const timerElement = document.getElementById('timer');

function initializeCards() {
    // Usando as variáveis globais definidas em data.js e dataJS.js
    cards = [...window.goFlashcards, ...window.jsFlashcards];
    updateCard();
    updateStats();
}

function updateCard() {
    if (!cards || cards.length === 0) {
        questionElement.textContent = 'Nenhum card disponível';
        answerElement.textContent = 'Ajuste os filtros';
        return;
    }

    const currentCard = cards[currentIndex];
    questionElement.textContent = currentCard.question;
    answerElement.textContent = currentCard.answer;
    progressElement.textContent = `Card ${currentIndex + 1} de ${cards.length}`;
    
    const progress = ((currentIndex + 1) / cards.length) * 100;
    progressFill.style.width = `${progress}%`;
}

function filterCards() {
    const filteredCards = [...window.goFlashcards, ...window.jsFlashcards].filter(card => {
        const matchesLanguage = currentLanguage === 'all' || 
            card.language.toLowerCase() === currentLanguage.toLowerCase();
        const matchesCategory = currentCategory === 'all' || 
            card.category.toLowerCase() === currentCategory.toLowerCase();
        return matchesLanguage && matchesCategory;
    });

    cards = filteredCards;
    currentIndex = 0;
    updateCard();
}

function updateStats() {
    studiedCardsElement.textContent = studiedCount;
    streakElement.textContent = streak;
    
    if (cardTimes.length > 0) {
        const avgTime = Math.floor(cardTimes.reduce((a, b) => a + b, 0) / cardTimes.length);
        avgTimeElement.textContent = `${avgTime}s`;
    }
}

function nextCard() {
    currentIndex = (currentIndex + 1) % cards.length;
    flashcardElement.classList.remove('flipped');
    studiedCount++;
    localStorage.setItem('studiedCount', studiedCount);
    updateStats();
    resetTimer();
    updateCard();
}

function previousCard() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    flashcardElement.classList.remove('flipped');
    resetTimer();
    updateCard();
}

function shuffleCards() {
    cards = [...cards].sort(() => Math.random() - 0.5);
    currentIndex = 0;
    flashcardElement.classList.remove('flipped');
    updateCard();
}

function resetTimer() {
    startTime = Date.now();
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeCards();
    
    flashcardElement.addEventListener('click', () => {
        flashcardElement.classList.toggle('flipped');
    });

    prevButton.addEventListener('click', previousCard);
    nextButton.addEventListener('click', nextCard);
    shuffleButton.addEventListener('click', shuffleCards);

    languageFilter.addEventListener('change', (e) => {
        currentLanguage = e.target.value;
        filterCards();
    });

    categoryFilter.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        filterCards();
    });

    difficultyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const difficulty = btn.dataset.difficulty;
            streak = difficulty === 'easy' ? streak + 1 : 0;
            localStorage.setItem('streak', streak);
            nextCard();
        });
    });

    // Start timer
    setInterval(updateTimer, 1000);
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            previousCard();
            break;
        case 'ArrowRight':
            nextCard();
            break;
        case ' ':
            flashcardElement.classList.toggle('flipped');
            break;
    }
});
