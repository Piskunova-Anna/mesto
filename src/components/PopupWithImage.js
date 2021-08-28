import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
    constructor(popup, image, text) {
        super(popup);
        this._image = image;
        this._text = text;
    }

    open({ name, link }, evt) {
        this._image.src = link;
        this._text.textContent = name;
        this._image.alt = name;
        super.open(evt);
    }
}