import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor({ submitForm }, popup) {
        super(popup);
        this._submitForm = submitForm;

        this.popupForm = this._popup.querySelector('.popup__form');
        this.inputList = this.popupForm.querySelectorAll('.popup__input');
    }

    _getInputValues() {

        this._formValues = {};
        this.inputList.forEach(input => this._formValues[input.name] = input.value);
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this.popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        })
    }

    close() {
        super.close();
        this.popupForm.reset();
    }
}