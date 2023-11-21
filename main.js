const themeToggleBtn = document.querySelector('.theme-toggle');

const theme = localStorage.getItem('theme');

if (theme) { 
    document.body.classList.add('dark-mode');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'darkmode'); localStorage.removeItem('theme2');
    } else {
        localStorage.removeItem('theme');
    }
});


const themecontrastToggleBtn = document.querySelector('.theme-toggle-contrast');

const theme2 = localStorage.getItem('theme2');

if (theme2) { 
    document.body.classList.add('contrast-mode');
}

themecontrastToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('contrast-mode');
    if (document.body.classList.contains('contrast-mode')) {
        localStorage.setItem('theme2', 'contrast-mode'); localStorage.removeItem('theme');
    } else {
        localStorage.removeItem('theme2');
    }

});
