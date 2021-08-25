export class Section {
    constructor({ items, renderer }, cardsContainer) {
        this._items = items;
        this._renderer = renderer;
        this._cardsGrid = cardsContainer;
    }

    addItem(element) {
        this._cardsGrid.append(element);
    }

    renderItems() {
        this._items.forEach(item => this._renderer(item));
    }
}