import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import { initialCards } from '../utils/initial-cards.js';
import './index.css';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { validationConfig, popupFullImage, popupImage, popupProfile, popupCard, profileButton, cardButton,
  popupFormProfile, popupFormCard, popupName, popupText, cardsGrid, fullName } from '../utils/constants.js';

const openImage = new PopupWithImage(popupImage, popupFullImage, fullName);
function cardRenderer (item){
const card = new Card(openImage, item, '.new-card');
const generateCard = card.generateCard();
section.addItem(generateCard);
}

//рендер карточек
const section = new Section({items: initialCards, renderer: (item) => {cardRenderer(item)}}, cardsGrid);

section.renderItems();

//фукнция открытия открытия попапа редактирования карточки
const popupWithCard = new PopupWithForm({submitForm: (item) => {cardRenderer(item)}}, popupCard);

//функция вставки данных в форму редактирования профиля
const userInfo = new UserInfo(popupName, popupText);
profileButton.addEventListener('click', (evt) => {
  popupWithForm.open(evt);
  userInfo.getUserInfo();
})

//функция открытия попапа
cardButton.addEventListener('click', (evt) => {
  popupWithCard.open(evt);
  popupCardValidate.toggleButtonState();
})

//функция открытия попапа редактирования профиля
const popupWithForm = new PopupWithForm({ submitForm: () => userInfo.setUserInfo() }, popupProfile);


popupWithCard.setEventListeners();
popupWithForm.setEventListeners();


const popupProfileValidate = new FormValidator(validationConfig, popupFormProfile);
const popupCardValidate = new FormValidator(validationConfig, popupFormCard);
popupProfileValidate.enableValidation();
popupCardValidate.enableValidation();