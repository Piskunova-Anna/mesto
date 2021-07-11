import { initialCards } from './initial-cards.js';
import { FormValidator, ValidationConfig } from './FormValidator.js';
import {
  popupName, text, profileName, profileText, popupProfile, popupCard, popupFormCard, popupNameCard,
  popupTextCard, popupImage, profileButton, profileAddButton, popupCloseProfile, popupCloseCard,
  popupFormProfile, popupCloseFullscreen, cardsGrid
} from './consts.js';
import { Card } from './Card.js';

const popupProfileValidate = new FormValidator(ValidationConfig, popupFormProfile);
const popupCardValidate = new FormValidator(ValidationConfig, popupFormCard);

//перебор массива
initialCards.forEach((item) => {
  const boxCard = new Card(item, '.new-card');
  const cardData = boxCard.generateCard();

  cardsGrid.append(cardData);
});

//функция добавления карточки на страницу из попапа
function addNewCard(evt) {
  evt.preventDefault();
  const nameCard = popupNameCard.value;
  const imageCard = popupTextCard.value;
  const cardInfo = {
    name: nameCard,
    link: imageCard
  }
  const newCard = new Card(cardInfo, '.new-card');
  const createCard = newCard.generateCard();
  cardsGrid.prepend(createCard);
  popupFormCard.reset();
  closePopup(popupCard);
}

//функция открытия попапа
export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
  document.addEventListener('mousedown', closePopupOverlay);
}

//функция открытия редактирования профиля
function openPopupProfile() {
  openPopup(popupProfile);
  popupName.value = profileName.textContent;
  text.value = profileText.textContent;
}

//функция открытия редактирования карточки
function openPopupCard() {
  popupNameCard.value = '';
  popupTextCard.value = '';
  openPopup(popupCard);
  popupCardValidate.toggleButtonState(popupFormCard);
}

//функция редактирования формы
function editForm(evt) {
  evt.preventDefault();
  profileName.textContent = popupName.value;
  profileText.textContent = text.value;
  closePopup(popupProfile);
}

//функция закрытия попапа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
  document.removeEventListener('mousedown', closePopupOverlay);
}

//функция закрытия попапа по нажатию кнопки esc
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

//функция закрытия попапа по оверлей
function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

popupProfileValidate.enableValidation();
popupCardValidate.enableValidation();

popupFormCard.addEventListener('submit', addNewCard);
profileButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupCard);
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));
popupCloseCard.addEventListener('click', () => closePopup(popupCard));
popupFormProfile.addEventListener('submit', editForm);
popupCloseFullscreen.addEventListener('click', () => closePopup(popupImage));