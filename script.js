
// navbar section

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let body = document.querySelector('body');
let darkModeIcon = document.querySelector('#darkmode-icon');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

// Darkmode

darkModeIcon.onclick = () => {
    body.classList.toggle('dark-mode');
    darkModeIcon.classList.toggle('fa-sun');
    darkModeIcon.classList.toggle('fa-moon');
};

// Multitext

var typingEffect = new Typed(".multiText", {
    strings : ["Front-End Developer", "Virtual Assistant"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
});


// scroll section

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offSet && top < offSet + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 100); 
};
  
    // Scroll Reveal

    ScrollReveal({
        //  reset: true,
         distance: '80px',
         duration: 2000,
         delay: 200,
});




ScrollReveal().reveal('.wrapper, .heading', { origin: 'top' });
ScrollReveal().reveal('.skills-container, .contact', { origin: 'bottom' });
ScrollReveal().reveal('.wrapper h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.wrapper p, .about-me', { origin: 'right' });