let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
};

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
};

setInterval(() => {
    next();
}, 7000);

// menu
const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
})