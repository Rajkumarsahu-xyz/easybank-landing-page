
function toggleNavbar() {
    const navbar = document.querySelector('.navbar');
    const closeMenu = document.querySelector('.close-menu');
    const menu = document.querySelector('.menu');

    if (navbar && closeMenu && menu) {
        menu.classList.remove('menuShow');
        navbar.classList.remove('navbarHide');
        closeMenu.classList.remove('closeMenuHide');

        navbar.classList.add('navbarShow');
        closeMenu.classList.add('closeMenuShow');
        menu.classList.add('menuHide');
    }
}

function closeNavbar() {
    const navbar = document.querySelector('.navbar');
    const menu = document.querySelector(".menu");
    const closeMenu = document.querySelector(".close-menu");

    if (navbar && menu && closeMenu) {
        navbar.classList.remove('navbarShow');
        navbar.classList.add('navbarHide');

        menu.classList.remove('menuHide');
        menu.classList.add('menuShow');

        closeMenu.classList.remove('closeMenuShow');
        closeMenu.classList.add('closeMenuHide');
    }
}

