import { Popup } from '../components/Popup.js';
import { ValidationConfig, FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
export {
  popupFullImage, popupTextImage, popupImage, popupCloseIcon, profileName, profileText, popupForm,
  imageCard, textCard, popup, fullName
};
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { initialCards } from '../components/initial-cards.js';
import './index.css';

const popupFullImage = document.querySelector('.popup__full-image');
const popupTextImage = document.querySelector('.popup__text-image');
const popupImage = document.querySelector('.popup_image');
const popupProfile = document.querySelector('.popup_profile');
const popupCard = document.querySelector('.popup_card');
const popupCloseIcon = document.querySelector('.popup__close-icon');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const profileButton = document.querySelector('.profile__button');
const cardButton = document.querySelector('.profile__add-button');
const popupFormProfile = document.querySelector('.popup__form_profile');
const popupFormCard = document.querySelector('.popup__form_card');
const popupForm = document.querySelector('.popup__form');
const popupName = document.querySelector('.popup__name');
const popupText = document.querySelector('.popup__text');
const cardsGrid = document.querySelector('.cards-grid');
const imageCard = document.querySelector('.cards-grid__image');
const textCard = document.querySelector('.cards-grid__text');
const popup = document.querySelector('.popup');
const fullName = document.querySelector('.popup__image-name');

const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.new-card');
    const generateCard = card.generateCard();
    section.addItem(generateCard);
  }
}, cardsGrid);

section.renderItems();

const userInfo = new UserInfo(popupName, popupText);
const openProfile = new Popup(popupProfile);
profileButton.addEventListener('click', () => {
  openProfile.open();
  userInfo.getUserInfo();
})

const openCard = new Popup(popupCard);
cardButton.addEventListener('click', () => {
  openCard.open();
})

const popupWithForm = new PopupWithForm({ submitForm: () => userInfo.setUserInfo() }, popupProfile);

const popupWithCard = new PopupWithForm({
  submitForm: (item) => {
    const newCard = new Card(item, '.new-card');
    const renderCard = newCard.generateCard();
    section.addItem(renderCard);
  }
}, popupCard);


popupWithCard.setEventListeners();
popupWithForm.setEventListeners();


const popupProfileValidate = new FormValidator(ValidationConfig, popupFormProfile);
const popupCardValidate = new FormValidator(ValidationConfig, popupFormCard);
popupProfileValidate.enableValidation();
popupCardValidate.enableValidation();