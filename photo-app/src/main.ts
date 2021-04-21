
import {User} from './user'
import {Album} from './album'
import {Picture} from './picture'
import {PhotoOrientation} from './photo-orientation'


const user = new User(1, 'jmaza', 'Hernan', true)
const album = new Album(10, 'Platzi pictures')
const picture = new  Picture(1, 'Typescript course', '2020-03', PhotoOrientation.Landscape)


//Creamos relaciones 
user.addAlbum(album)
album.addPicture(picture)

console.log('user ', user);
user.removeAlbum(album)
console.log('user ', user);
