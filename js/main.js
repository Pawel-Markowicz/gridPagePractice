const navMobile = document.querySelector('.nav-mobile');
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelectorAll('.nav__item');
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
    navMobile.classList.toggle('active');

    navItems.forEach (item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('active');
        })
    })
}

hamburger.addEventListener('click', handleNav);

const handleYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

handleYear();
