export class Popup {
    constructor(popup) {
        this._popup = popup;
    }

    open(evt) {
        this._popup.classList.add('popup_opened');
        this._setEventListeners(evt);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
        document.removeEventListener('mousedown', (evt) => {
            this._closePopupOverlay(evt);
        });
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _closePopupOverlay(evt) {
        if (evt.target.classList.contains('popup')) {
            this.close(evt.target);
        }
    }

    _setEventListeners() {
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
        document.addEventListener('mousedown', (evt) => {
            this._closePopupOverlay(evt);
        });
        this._popup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup__close-icon')) {
                this.close();
            }
        });
    }
}