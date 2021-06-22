popupFormCard.addEventListener('submit', addNewCard);
profileButton.addEventListener('click', openPopupProfile);
profileAddButton.addEventListener('click', openPopupCard);
popupCloseProfile.addEventListener('click', () => closePopup(popupProfile));
popupCloseCard.addEventListener('click', () => closePopup(popupCard));
popupFormProfile.addEventListener('submit', editForm);
popupCloseFullscreen.addEventListener('click', () => closePopup(popupImage));