export class Section {
    constructor({ renderer }, cardsContainer) {
        this._renderer = renderer;
        this._cardsGrid = cardsContainer;
    }

    prependItem(element) {
        this._cardsGrid.prepend(element);
    }

    addItem(element) {
        this._cardsGrid.append(element);
    }

    renderItems(items) {
        items.forEach(item => this._renderer(item));
    }
}