"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
class Item {
    constructor(id, title) {
        this._id = id;
        this._title = title;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    set title(value) {
        this._title = value;
    }
}
exports.Item = Item;
