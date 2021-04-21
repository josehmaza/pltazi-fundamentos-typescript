"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_orientation_1 = require("./photo-orientation");
const user = new user_1.User(1, 'jmaza', 'Hernan', true);
const album = new album_1.Album(10, 'Platzi pictures');
const picture = new picture_1.Picture(1, 'Typescript course', '2020-03', photo_orientation_1.PhotoOrientation.Landscape);
//Creamos relaciones 
user.addAlbum(album);
album.addPicture(picture);
console.log('user ', user);
user.removeAlbum(album);
console.log('user ', user);
