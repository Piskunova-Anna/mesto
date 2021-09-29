import { Popup } from "./Popup.js";

export class PopupDeleteCard extends Popup {
    constructor(popup) {
        super(popup);
        this.popupForm = this._popup.querySelector('.popup__form');
    }

    open({ deleteForm }) {
        super.open();
        this.deleteForm = deleteForm;
    }

    delete(res) {
        this.deleteForm(res);
    }

    setEventListeners() {
        super.setEventListeners();
        this.popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.delete();
        });
    }
}