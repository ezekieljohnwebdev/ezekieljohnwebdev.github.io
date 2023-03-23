var typingEffect = new Typed(".multiText", {
    strings : ["Developer", "Virtual Assistant"],
    loop : true,
    typeSpeed : 100,
    backSpeed : 80,
    backDelay : 1500
})

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('top-container nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offSet = sec.offsetTop - 120;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offSet && top < offSet + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('top-container nav a [href*=' + id + ']').classList.add('active');
            });
        };
    });
};