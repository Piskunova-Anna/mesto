export {validationConfig, popupFullImage, popupImage, popupProfile, popupCard, profileName, profileText,
    profileButton, cardButton, popupFormProfile, popupFormCard, popupName, popupText, cardsGrid, fullName}
const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    errorOrigin: 'popup__input-error_active'
};
const popupFullImage = document.querySelector('.popup__full-image');
const popupImage = document.querySelector('.popup_image');
const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const profileButton = document.querySelector('.profile__button');
const cardButton = document.querySelector('.profile__add-button');
const popupFormProfile = document.querySelector('.popup__form_profile');
const popupFormCard = document.querySelector('.popup__form_card');
const popupName = document.querySelector('.popup__name');
const popupText = document.querySelector('.popup__text');
const cardsGrid = document.querySelector('.cards-grid');
const fullName = document.querySelector('.popup__image-name');