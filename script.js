let menu = document.getElementById('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}


const sr = scrollreveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal ('.hero-text', {delay:200, origin: 'top'});
sr.reveal ('.hero-img', {delay:450, origin: 'top'});
sr.reveal ('.icons', {delay:500, origin: 'left'});
sr.reveal ('.scroll-down', {delay:500, origin: 'right'});