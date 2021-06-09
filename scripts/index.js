const popup = document.querySelector('.popup');
const popupName = document.querySelector('.popup__name_edit_profile');
const text = document.querySelector('.popup__text_edit_profile');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

//функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
    }

//функция открытия редактирования профиля
const popupProfile = document.querySelector('.popup_profile');
function openPopupProfile(){
    openPopup(popupProfile);
    popupName.value = profileName.textContent;
    text.value = profileText.textContent;
}

//функция открытия редактирования карточки
const popupCard = document.querySelector('.popup_card');
function openPopupCard() {
    openPopup(popupCard);
}

//функция закрытия попапа
function closePopup(popup) {
    popup.classList.remove('popup_opened');
}

//функция редактирования формы
function editForm(evt) {
    evt.preventDefault();
    profileName.textContent = popupName.value;
    profileText.textContent = text.value;
    closePopup(popup);
}

const profileButton = document.querySelector('.profile__button');
const profileAddButton = document.querySelector('.profile__add-button');
const popupCloseProfile = document.querySelector('.popup_close-profile');
const popupCloseCard = document.querySelector('.popup_close-card');
const popupForm = document.querySelector('.popup__form');
profileButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupCard);
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));
popupCloseCard.addEventListener('click', () => closePopup(popupCard));
popupForm.addEventListener('submit', editForm);

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  //функция добавления карточек на страницу
  const cardsGrid = document.querySelector('.cards-grid');
  const cardTemplate = document.querySelector('.new-card').content;
  function createNewCard(element){
      const newCard = cardTemplate.cloneNode(true);

      newCard.querySelector('.cards-grid__image').src = element.link;
      newCard.querySelector('.cards-grid__text').textContent = element.name;

      cardsGrid.append(newCard)
  }

  //перебор массива
    initialCards.forEach(function (element){
        createNewCard(element);
    });
 
//функция добавления карточки на страницу из попапа
   const addBtnCard = document.querySelector('.popup__button_card');
  addBtnCard.addEventListener('submit', function(evt){
      evt.preventDefault();
      const popupNameCard = document.querySelector('.popup__name_card');
      const popupTextCard = document.querySelector('.popup__text_card');

      createNewCard(popupNameCard, popupTextCard);

      popupNameCard.value = '';
      popupTextCard.value = '';
      closePopup(popupCard);
  })