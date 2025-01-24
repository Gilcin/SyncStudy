// State
let currentIndex = 0;
let cards = [];
let studiedCount = parseInt(localStorage.getItem('studiedCount')) || 0;
let correctAnswers = parseInt(localStorage.getItem('correctAnswers')) || 0;
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
const languageFilter = document.getElementById('languageFilter');
const categoryFilter = document.getElementById('categoryFilter');
const progressFill = document.getElementById('progressFill');
const studiedCardsElement = document.getElementById('studiedCards');
const correctAnswersElement = document.getElementById('correctAnswers');
const avgTimeElement = document.getElementById('avgTime');
const timerElement = document.getElementById('timer');

function updateCategoryFilter() {
    // Filtra os cards pela linguagem selecionada
    const filteredByLanguage = currentLanguage === 'all' 
        ? [...window.goFlashcards, ...window.jsFlashcards]
        : [...window.goFlashcards, ...window.jsFlashcards].filter(
            card => card.language.toLowerCase() === currentLanguage.toLowerCase()
        );

    // Obtém categorias únicas dos cards filtrados
    const categories = ['all', ...new Set(filteredByLanguage.map(card => card.category))];
    
    // Atualiza o select de categorias
    categoryFilter.innerHTML = categories.map(category =>
        `<option value="${category.toLowerCase()}">${
            category === 'all' ? 'Todas Categorias' : category
        }</option>`
    ).join('');

    // Reset categoria para 'all' quando mudar a linguagem
    currentCategory = 'all';
    categoryFilter.value = 'all';
}

function populateFilters() {
    // Populate language filter
    const languages = ['all', ...new Set([...window.goFlashcards, ...window.jsFlashcards].map(card => card.language))];
    languageFilter.innerHTML = languages.map(language =>
        `<option value="${language.toLowerCase()}">${
            language === 'all' ? 'Todas Linguagens' : language
        }</option>`
    ).join('');

    // Inicializa o filtro de categorias
    updateCategoryFilter();
}

function initializeCards() {
    populateFilters();
    filterCards();
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
    cards = [...window.goFlashcards, ...window.jsFlashcards].filter(card => {
        const matchesLanguage = currentLanguage === 'all' || 
            card.language.toLowerCase() === currentLanguage.toLowerCase();
        const matchesCategory = currentCategory === 'all' || 
            card.category.toLowerCase() === currentCategory.toLowerCase();
        return matchesLanguage && matchesCategory;
    });

    currentIndex = 0;
    updateCard();
}

function updateStats() {
    studiedCardsElement.textContent = studiedCount;
    correctAnswersElement.textContent = correctAnswers;
    
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
        updateCategoryFilter(); // Atualiza categorias quando mudar a linguagem
        filterCards();
    });

    categoryFilter.addEventListener('change', (e) => {
        currentCategory = e.target.value;
        filterCards();
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
