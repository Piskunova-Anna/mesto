let profile__button = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let popup__opened = document.querySelector('.popup__opened');
let popup__closeIcon = document.querySelector('.popup__close-icon');
let popup__button = document.querySelector('.popup__button');

function closePopup() {
    popup.classList.remove('popup__opened');
}

profile__button.addEventListener('click', function() {
    popup.classList.add('popup__opened');
});
popup__closeIcon.addEventListener('click', closePopup)

let profile__name = document.querySelector('.profile__name');
let popup__name = document.querySelector('.name');
let profile__text = document.querySelector('.profile__text');
let text = document.querySelector('.text');
popup__button.addEventListener('click', function(evt) {
    evt.preventDefault();
    profile__name.textContent = popup__name.value;
    profile__text.textContent = text.value;
    closePopup();
});