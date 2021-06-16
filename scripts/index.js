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
    closePopup(popupProfile);
}

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
  function createCard(element){
      const newCard = cardTemplate.cloneNode(true);
      const cardsGridImage = newCard.querySelector('.cards-grid__image');

      cardsGridImage.src = element.link;
      newCard.querySelector('.cards-grid__text').textContent = element.name;
      cardsGridImage.alt = element.name;

      newCard.querySelector('.cards-grid__like').addEventListener('click', function(evt){
        evt.target.classList.toggle('cards-grid__like_active');
      })

      newCard.querySelector('.cards-grid__trash-bin').addEventListener('click', deleteCard);

      cardsGridImage.addEventListener('click', fullscreenImage);

      return newCard;
      //cardsGrid.prepend(newCard)
  }

    function addCard(element) {
    createCard(element);
    }
  //функция удаления карточки
  function deleteCard (evt){
    const cardDelete = evt.target.closest('.cards-grid__card');
    cardDelete.remove();
  }

  //перебор массива
    initialCards.forEach(function (element){
        const boxCard = createCard(element);
        cardsGrid.append(boxCard);
    });
    
//функция добавления карточки на страницу из попапа
  const popupFormCard = document.querySelector('.popup__form_card');
  const popupNameCard = document.querySelector('.popup__name_card');
  const popupTextCard = document.querySelector('.popup__text_card');

  function addNewCard (evt) {
    evt.preventDefault();
    const nameCard = popupNameCard.value;
    const imageCard = popupTextCard.value;
    const cardInfo = {
        name: nameCard,
        link: imageCard
      }

      const newCard = createCard(cardInfo);
      cardsGrid.prepend(newCard);
      popupFormCard.reset();
      closePopup(popupCard);
  }
  popupFormCard.addEventListener('submit', addNewCard);

    //функция открытия изображения
    const popupImage = document.querySelector('.popup_image');
    const popupFullImage = document.querySelector('.popup__full-image');
    const popupTextImage = document.querySelector('.popup__image-name');
    
    function fullscreenImage(evt){
      popupFullImage.src = evt.target.closest('.cards-grid__image').src;
      popupFullImage.alt = evt.target.closest('.cards-grid__image').alt;
      popupTextImage.textContent = evt.target.closest('.cards-grid__image').alt;
      openPopup(popupImage);
    }

    const profileButton = document.querySelector('.profile__button');
    const profileAddButton = document.querySelector('.profile__add-button');
    const popupCloseProfile = document.querySelector('.popup__close-profile');
    const popupCloseCard = document.querySelector('.popup__close-card');
    const popupFormProfile = document.querySelector('.popup__form_profile');
    const popupCloseFullscreen = document.querySelector('.popup__close-icon_fullscreen');
    profileButton.addEventListener('click', openPopupProfile);
    profileAddButton.addEventListener('click', openPopupCard);
    popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));
    popupCloseCard.addEventListener('click', () => closePopup(popupCard));
    popupFormProfile.addEventListener('submit', editForm);
    popupCloseFullscreen.addEventListener('click', () => closePopup(popupImage));