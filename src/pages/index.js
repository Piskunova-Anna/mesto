import { FormValidator } from '../components/FormValidator.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { Section } from '../components/Section.js';
import { Card } from '../components/Card.js';
import './index.css';
import { PopupWithImage } from '../components/PopupWithImage.js';
import {
  validationConfig, popupFullImage, popupImage, popupProfile, popupCard, profileButton, cardButton,
  popupFormProfile, popupFormCard, popupName, popupText, cardsGrid, fullName, avatar,
  popupAvatar, popupDelete, buttonProfile, buttonCard, buttonDelete, buttonAvatar
} from '../utils/constants.js';
import { Api } from '../components/Api.js';
import { PopupDeleteCard } from '../components/PopupDeleteCard.js';

//токен 736939e5-a2e5-4850-bebf-e974dad23e4c

const newApi = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
  headers: {
    authorization: '736939e5-a2e5-4850-bebf-e974dad23e4c',
    'Content-Type': 'application/json'
  }
});

//рендер карточек
const section = new Section({ renderer: (item) => { cardRenderer(item) } }, cardsGrid);
//функция открытия картинки
const openImage = new PopupWithImage(popupImage, popupFullImage, fullName);
const userInfo = new UserInfo(popupName, popupText, { id: (res) => res._id });
//функция открытия открытия попапа редактирования карточки
const popupWithCard = new PopupWithForm({
  submitForm: (res) => {
    buttonCard.textContent = 'Создание';
    newApi.getNewCard(res.name, res.link)
      .then((result) => {
        const cardRenderer = cardRenderer(result.name, result.link);
        section.addItem(cardRenderer);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => { buttonCard.textContent = 'Создать' })
  }
}, popupCard);
//функция открытия попапа редактирования профиля
const popupWithForm = new PopupWithForm({
  submitForm: (res) => {
    buttonProfile.textContent = 'Сохранение...'
    newApi.getNewProfile(res.name, res.text)
      .then((result) => {
        userInfo.setUserInfo(result.name, result.about, result._id);
        popupWithForm.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => { buttonProfile.textContent = 'Сохранить' })
  }
}, popupProfile);

const popupWithAvatar = new PopupWithForm({
  submitForm: (res) => {
    buttonAvatar.textContent = 'Сохранение...'
    newApi.getAvatar(res.avatar)
      .then((result) => {
        userInfo.setUserAvatar(result.avatar)
        popupWithAvatar.close();
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => { buttonAvatar.textContent = 'Сохранить' })
  }
}, popupAvatar)

function cardRenderer(res) {
  const card = new Card(openImage,
    {
      data: res,
      /*owner: res.owner,*/
      handleClickLike: (res) => {
        if (res.querySelector('.cards-grid__like_img').classList.contains('cards-grid__like_active')) {
          newApi.getDeleteLike(res._id)
            .then((res) => {
              card.like(res);
            })
            .catch((err) => console.log(err));
        }
        else {
          newApi.getPutLike(res._id)
            .then((res) => {
              card.like(res);
            })
            .catch((err) => console.log(err));
        }
      },
      handleDeleteCard: (res) => {
        Card.open({
          deleteForm: () => {
            buttonDelete.textContent = 'Удаление...'
            newApi.getDeleteCard(res._id)
              .then((res) => {
                card.deleteCard(res);
                popupDeleteCard.close();
              })
              .catch((err) => console.log(err))
              .finally(() => { buttonDelete.textContent = 'Да' })
          }
        })
      }
    }, '.new-card', userInfo.setUserId());
  const generateCard = card.generateCard();
  section.addItem(generateCard);
}

const popupDeleteCard = new PopupDeleteCard(popupDelete)

//функция открытия попапа
cardButton.addEventListener('click', (evt) => {
  popupWithCard.open(evt);
  popupCardValidate.toggleButtonState();
})

profileButton.addEventListener('click', (evt) => {
  popupWithForm.open(evt);
  userInfo.getUserInfo();
})

avatar.addEventListener('click', (evt) => {
  popupWithAvatar.open(evt);
})

newApi.getInitialCards()
  .then((result) => {
    section.renderItems({ items: result });
  })
  .catch((err) => {
    console.log(err);
  })

newApi.getinitialProfile()
  .then((result) => {
    userInfo.setUserInfo(result.name, result.about, result._id);
    userInfo.setUserAvatar(result.avatar);
  })
  .catch((err) => {
    console.log(err);
  })

popupDeleteCard.setEventListeners();
popupWithAvatar.setEventListeners();
popupWithCard.setEventListeners();
popupWithForm.setEventListeners();
openImage.setEventListeners();

//валидация
const popupProfileValidate = new FormValidator(validationConfig, popupFormProfile);
const popupCardValidate = new FormValidator(validationConfig, popupFormCard);
const popupAvatarValidate = new FormValidator(validationConfig, popupAvatar);
popupProfileValidate.enableValidation();
popupCardValidate.enableValidation();
popupAvatarValidate.enableValidation();