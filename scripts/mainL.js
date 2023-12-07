// 1. Selecteren van element via id

// Selecteren button om de pop-up te openen
const openBtn = document.getElementById("openModal");

// Selecteren button om de pop-up te sluiten
const closeBtn = document.getElementById("closemodal");

// De pop-up
const modal = document.getElementById("modal");


// 2. Event

// Pop-up opent door dit event
openBtn.addEventListener("click", () => {
    modal.classList.add("open");
});

// Pop-up sluit hierdoor
closeBtn.addEventListener("click", () => {
    modal.classList.remove("open");
});


