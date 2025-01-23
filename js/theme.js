// Theme management module
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Get initial theme from localStorage or default to 'dark'
let currentTheme = localStorage.getItem('theme') || 'dark';

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    currentTheme = theme;
    
    // Update icon
    themeIcon.textContent = theme === 'dark' ? '🌙' : '☀️';
    
    // Update any theme-specific styles
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${theme}-theme`);
}

// Add click event listener
themeToggle.addEventListener('click', () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
    setTheme(currentTheme);
});

// Export for other modules if needed
window.themeManager = { setTheme, currentTheme };
