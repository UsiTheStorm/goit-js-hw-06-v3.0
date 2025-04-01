class StringBuilder {
    #value;
    constructor(value) {
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        this.#value += str;
    }

    padStart(str) {
        this.#value = str + this.#value;
    }

    padBoth(str) {
        this.#value = str + this.#value + str;
    }
}
