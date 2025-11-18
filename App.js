// creating toggle menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');

const menuItems = navMenu.querySelectorAll('li');

function toggleMenu() {
    navMenu.classList.toggle('menu-open');

    menuItems.forEach((item, index) => {
        if (navMenu.classList.contains('menu-open')) {
            const delay = index * 0.1;

            item.style.transitionDelay = `${delay}s`;
        } else {
            item.style.transitionDelay = '0s';
        }
    });
}

hamburgerIcon.addEventListener('click', toggleMenu);