// light and dark mode function.
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    updateButtonContent();
});

function updateButtonContent() {
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    modeToggle.textContent = currentMode === 'dark' ? '🌞' : '🌙';
}
