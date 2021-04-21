"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Album = void 0;
const item_1 = require("./item");
class Album extends item_1.Item {
    constructor(id, title) {
        super(id, title);
        this._pictures = [];
    }
    get pictures() {
        return this._pictures;
    }
    set pictures(value) {
        this._pictures = value;
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
exports.Album = Album;
