let burger = document.querySelector('.burger');
let menuMobile = document.querySelector('.nav');
burger.addEventListener('click', function(e) {
    e.preventDefault();
    menuMobile.classList.toggle('open');
    burger.classList.toggle('active');
});