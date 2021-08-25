import { popupFullImage, popupImage, fullName } from '../src/index.js';
import { PopupWithImage } from './PopupWithImage.js';

export class Card {
    constructor(data, cardSelector) {
        this._text = data.name;
        this._image = data.link;
        this._alt = data.name;
        this._cardSelector = cardSelector;
    }

    _getTemplate() {
        const newCard = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.cards-grid__card')
            .cloneNode(true);

        return newCard;
    }

    generateCard() {
        this._element = this._getTemplate();
        this._setEventListeners();

        this._element.querySelector('.cards-grid__image').src = this._image;
        this._element.querySelector('.cards-grid__image').alt = this._alt;
        this._element.querySelector('.cards-grid__text').textContent = this._text;

        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.cards-grid__like').addEventListener('click', () => {
            this._like();
        });
        this._element.querySelector('.cards-grid__trash-bin').addEventListener('click', () => {
            this._deleteCard();
        });
        this._element.querySelector('.cards-grid__image').addEventListener('click', () => {
            this._openFullImage();
        });
    }

    _like() {
        this._element.querySelector('.cards-grid__like').classList.toggle('cards-grid__like_active');
    }

    _deleteCard() {
        this._element.closest('.cards-grid__card').remove();
    }

    _openFullImage() {
        const openImage = new PopupWithImage(popupImage, popupFullImage, fullName);
        openImage.open({ name: this._text, link: this._image });
    }
}