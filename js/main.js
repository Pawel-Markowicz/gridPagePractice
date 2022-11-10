const navMobile = document.querySelector('.nav-mobile');
const hamburger = document.querySelector('.hamburger');
const navItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
    navMobile.classList.toggle('active');

    navItems.forEach (item => {
        item.addEventListener('click', () => {
            navMobile.classList.remove('active');
        })
    })
}

hamburger.addEventListener('click', handleNav);

