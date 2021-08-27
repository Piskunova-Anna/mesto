export class Popup {
    constructor(popup) {
        this._popup = popup;
        this._handleEscClose = this._handleEscClose.bind(this)
    }

    open(evt) {
        this._popup.classList.add('popup_opened');
        this._setEventListeners(evt);
        this._popup.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt);
        });
    }

    close() {
        this._popup.classList.remove('popup_opened');
        this._popup.removeEventListener('keydown', (evt) => {
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
        this._popup.addEventListener('mousedown', (evt) => {
            if ((evt.target.classList.contains('popup')) ||
            (evt.target.classList.contains('popup__close-icon')))
            {
                this.close();
            }
        });
    }
}