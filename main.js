const hamburgerIcon = document.querySelector('.fa-bars');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburgerClose = document.querySelector('.close');

hamburgerIcon.addEventListener('click', function () {
    hamburgerMenu.classList.add('active');
});

hamburgerClose.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
});