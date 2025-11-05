// toogle class active
const navbarNav = document.querySelector ('.navbar-nav');
//kerika menu di klik
document.querySelector('#menu').
onclick = () => {
    navbarNav.classList.toggle('active');

};

// klik diluar sidebar untuk menghlangkan nav
const menu = document.querySelector('#menu');

document.addEventListener('click', function (e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});


