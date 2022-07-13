const NAV_MENU = document.getElementById('nav-menu');
const TOGGLE_MENU = document.getElementById('nav-toggle');
const CLOSE_MENU = document.getElementById('nav-close');

TOGGLE_MENU.addEventListener('click', () => {
    NAV_MENU.classList.toggle('show')
})

CLOSE_MENU.addEventListener('click', () => {
    NAV_MENU.classList.remove('show')
})

document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const SPEED = layer.getAttribute('data-SPEED')

        const x = (window.innerWidth - e.pageX*SPEED)/120
        const y = (window.innerHeight - e.pageY*SPEED)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:2, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 2.1, y: 30, stagger: 0.2,})

gsap.from('.home__title', {opacity: 0, duration: 1, delay:1.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:1.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:2.1, y: 30})
gsap.from('.home__img', {opacity: 0, duration: 1, delay:1.3, y: 30})