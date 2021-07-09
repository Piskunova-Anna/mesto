import {popupFormProfile, popupFormCard} from "./consts.js";

export const configurate = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
    errorOrigin: 'popup__input-error_active'
};

export class FormValidator{
    constructor(config, formElement){
        this._formSelector = config.formSelector;
        this._inputSelector = config.inputSelector;
        this._submitButtonSelector = config.submitButtonSelector;
        this._inactiveButtonClass = config.inactiveButtonClass;
        this._inputErrorClass = config.inputErrorClass;
        this._errorClass = config.errorClass;
        this._errorOrigin = config.errorOrigin;
        this._formElement = formElement;
        this._formList = Array.from(document.querySelectorAll(this._formSelector));
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    }
    enableValidation(){
        this._formList.forEach(() => {
           this._formElement.addEventListener('submit', (evt) => {
               evt.preventDefault;
            });
            this._setEventListeners();
        })
    }

    _setEventListeners(){
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () =>{
                this._isValid(inputElement);
    
                this._toggleButtonState(inputElement);
            })
        })
    }

    _isValid(inputElement){
        if (!inputElement.validity.valid){
            this.showInputError(inputElement, inputElement.validationMessage);
        }
        else {
            this.hideInputError(inputElement);
        }
    }

    _toggleButtonState(inputElement){
        if (this._hasInvalidInput(inputElement)) {
            this._submitButton.classList.add(this._inactiveButtonClass);
            this._submitButton.disabled = 'true';
        }
        else
        {
            this._submitButton.classList.remove(this._inactiveButtonClass);
            this._submitButton.disabled = '';
        }
    }

    showInputError(inputElement, errorMessage){
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(this._errorOrigin);
    }

    hideInputError(inputElement){
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorOrigin);
        errorElement.textContent = '';
    }

    _hasInvalidInput(inputElement){
        return this._inputList.some(() => {
            return !inputElement.validity.valid;
        })
    }
}

const popupProfileValidate = new FormValidator(configurate, popupFormProfile);
const popupCardValidate = new FormValidator(configurate, popupFormCard);

popupProfileValidate.enableValidation();
popupCardValidate.enableValidation();