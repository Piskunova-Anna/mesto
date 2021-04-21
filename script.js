let profile__info_button = document.querySelector('.profile__info_button');
let popup__container = document.querySelector('.popup__container');
let popup__overlay = document.querySelector('.popup__overlay');
let popup__closeIcon = document.querySelector('.popup__close-icon');
profile__info_button.addEventListener('click', function() {
    popup__overlay.style.display = 'block';
    popup__container.style.display = 'flex';
});
popup__closeIcon.addEventListener('click', function() {
    popup__overlay.style.display = 'none';
    popup__container.style.display = 'none';
})