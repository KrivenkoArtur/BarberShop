import * as ArtFunctions from "./modules/functions.js";

ArtFunctions.isWebp();

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.navbar__menu-body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}

var openPopUp = document.querySelectorAll('.open__pop-up');
const closePopUp = document.getElementById('pop__up-close');
const popUp = document.getElementById('pop__up');

openPopUp.forEach(function(item) {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        popUp.classList.add('active');
    })
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})