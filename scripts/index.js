let profileButton = document.querySelector('.profile__button');
let popup = document.querySelector('.popup');
let popupCloseIcon = document.querySelector('.popup__close-icon');
let popupButton = document.querySelector('.popup__button');
let profileName = document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__name_edit_profile');
let profileText = document.querySelector('.profile__text');
let text = document.querySelector('.popup__text_edit_profile');

function openPopup() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function editForm(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileText.textContent = text.value;
    closePopup();
}

profileButton.addEventListener('click', openPopup);
popupCloseIcon.addEventListener('click', closePopup);
popupButton.addEventListener('click', editForm);