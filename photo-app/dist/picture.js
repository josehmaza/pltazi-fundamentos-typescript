"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Picture = void 0;
const item_1 = require("./item");
const photo_orientation_1 = require("./photo-orientation");
class Picture extends item_1.Item {
    //Propiedades
    constructor(id, title, _date, _orientation) {
        super(id, title);
        this._date = _date;
        this._orientation = _orientation;
    }
    // Comportamiento
    toString() {
        return `[id: ${this.id}, title: ${this.title} orientation: ${this.orientation}]`;
    }
    get orientation() {
        return this._orientation;
    }
    set orientation(orientation) {
        this._orientation = orientation;
    }
}
exports.Picture = Picture;
Picture.photoOrientation = photo_orientation_1.PhotoOrientation;
