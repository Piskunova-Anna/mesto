export class Section {
    constructor({ renderer }, cardsContainer) {
        this._renderer = renderer;
        this._cardsGrid = cardsContainer;
    }

    addItem(element) {
        this._cardsGrid.append(element);
    }

    renderItems({ items }) {
        items.forEach(item => this._renderer(item));
    }
}