export class Card {
    constructor(handleCardClick, { data, handleClickLike, handleDeleteCard }, cardSelector, likeId) {
        this._text = data.name;
        this._image = data.link;
        this._alt = data.name;
        this._likes = data.likes;
        this._cardSelector = cardSelector;
        this._openFullImage = handleCardClick;
        this._clickLike = handleClickLike;
        this._delete = handleDeleteCard;
        this._id = data._id;
        this._userId = data.owner._id;//айди создавшего карточку
        this._likeId = likeId;//мой айди
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

        if (this._userId == this._likeId) {
            this._element.querySelector('.cards-grid__trash-bin').classList.add('cards-grid__trash-bin_active');
        }
        this._likes.forEach((like) => {
            if (like._id == this._likeId) {
                this._element.querySelector('.cards-grid__like_img').classList.add('cards-grid__like_active');
            }
        })
        this._element.querySelector('.cards-grid__image').src = this._image;
        this._element.querySelector('.cards-grid__image').alt = this._alt;
        this._element.querySelector('.cards-grid__text').textContent = this._text;
        this._element.querySelector('.cards-grid__like_num').textContent = this._likes.length;
        this._element._id = this._id;
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.cards-grid__like').addEventListener('click', () => {
            this._clickLike(this._element);
        });
        this._element.querySelector('.cards-grid__trash-bin').addEventListener('click', () => {
            this._delete(this._element);
        });
        this._element.querySelector('.cards-grid__image').addEventListener('click', () => {
            this._openFullImage.open({ name: this._text, link: this._image });
        });
    }

    like(res) {
        this._element.querySelector('.cards-grid__like_img').classList.toggle('cards-grid__like_active');
        this._element.querySelector('.cards-grid__like_num').textContent = res.likes.length;

    }

    deleteCard() {
        this._element.remove();
    }
}