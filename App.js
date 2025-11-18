// creating toggle menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const navMenu = document.getElementById('nav-menu');

const menuItems = navMenu.querySelectorAll('li');

const body = document.body;

function toggleMenu() {
    document.body.classList.toggle('menu-open');

    const isMenuOpen = document.body.classList.contains('menu-open');

    navMenu.classList.toggle('menu-open');
    
    menuItems.forEach((item, index) => {
        if (isMenuOpen) {
            const delay = index * 0.1;
            item.style.transitionDelay = `${delay}s`;
        } else {
            const reverseIndex = menuItems.length - 1 - index;
            const delay = reverseIndex * 0.1;

            item.style.transitionDelay = `${delay}s`;
        }
    })
}

const menuLink = document.querySelector('.menu-link');
menuLink.addEventListener('click', toggleMenu);

// dark mode logic to be added