document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.menu-burg');
    const menuLinks = document.querySelector('.enlaces');

    menuButton.addEventListener('click', function () {
        menuLinks.classList.toggle('active');
    });
});

