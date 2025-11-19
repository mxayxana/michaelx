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

// dark mode 

const darkModeButton = document.querySelector('.dark-mode');
const darkModeIcon = darkModeButton.querySelector('svg');

function toggleDarkMode() {
    // Determine the current state BEFORE we toggle
    const isDark = document.body.classList.contains('dark-mode-active');
    
    // 1. Toggle the class on the body
    document.body.classList.toggle('dark-mode-active');
    
    // 2. Remove any previous animation classes to reset for the next click
    darkModeIcon.classList.remove('spill', 'restore');

    // 3. Conditional Animation Logic:

    if (isDark) {
        // If it WAS dark, we are now entering LIGHT mode (Milk Tea Spill)
        // We need to run the RESTORE animation.
        darkModeIcon.classList.add('restore');
    } else {
        // If it WAS light, we are now entering DARK mode (Matcha Spill)
        // We need to run the SPILL animation.
        darkModeIcon.classList.add('spill');
    }
}

if (darkModeButton) {
    darkModeButton.addEventListener('click', toggleDarkMode);
}