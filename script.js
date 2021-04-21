let profile__button = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let popup__overlay = document.querySelector('.popup__overlay');
let popup__closeIcon = document.querySelector('.popup__close-icon');
profile__button.addEventListener('click', function() {
    popup__overlay.style.display = 'block';
    popup.style.display = 'flex';
});
popup__closeIcon.addEventListener('click', function() {
    popup__overlay.style.display = 'none';
    popup.style.display = 'none';
})