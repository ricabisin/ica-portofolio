let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('ri-close-line');
        navbar.classList.toggle('active');
    };
}

const typed = new Typed('.multiple-text', {
    strings: [
        'Web Developer',
        'Game Developer',
        'Storyteller',
        'Loves Painting'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});