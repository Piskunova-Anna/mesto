//функция открытия попапа
function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEsc);
    document.addEventListener('mousedown', closePopupOverlay);
    }

//функция открытия редактирования профиля
function openPopupProfile(){
    openPopup(popupProfile);
    popupName.value = profileName.textContent;
    text.value = profileText.textContent;
}

//функция открытия редактирования карточки
function openPopupCard() {
    popupNameCard.value = '';
    popupTextCard.value = '';
    openPopup(popupCard);
    enableValidation(config);
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

//функция добавления карточек на страницу
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

//функция открытия изображения
function fullscreenImage(evt){
      popupFullImage.src = evt.target.closest('.cards-grid__image').src;
      popupFullImage.alt = evt.target.closest('.cards-grid__image').alt;
      popupTextImage.textContent = evt.target.closest('.cards-grid__image').alt;
      openPopup(popupImage);
}

//функция закрытия попапа по нажатию кнопки esc
function closePopupEsc (evt){
      if (evt.key === 'Escape'){ 
        const popupOpened = document.querySelector('.popup_opened');
        closePopup(popupOpened);
      }
}

//функция закрытия попапа по оверлей
function closePopupOverlay (evt){
      if (evt.target.classList.contains('popup')){
        closePopup(evt.target);
      }
}