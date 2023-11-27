const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


const themeToggleBtn = document.querySelector('.theme-toggle');

const theme = localStorage.getItem('theme');

if (theme) { 
    document.body.classList.add('light-mode');
}

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light'); localStorage.removeItem('theme2');
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


 
let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}