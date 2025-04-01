class Storage {
    #items;
    constructor(items) {
        this.#items = items;
    }

    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        const index = this.#items.findIndex((item) => item === itemToRemove);
        if (index !== -1) {
            this.#items.splice(index, 1);
        }
    }
}
