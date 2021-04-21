export {}
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}
abstract class Item {
  private readonly _id: number;
 
  private _title: string; 
  
  constructor(id: number, title: string){
    this._id = id
    this._title = title
  }
  get id(): number {
    return this._id;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
}
class Picture extends Item{
  public static photoOrientation = PhotoOrientation
  //Propiedades
  private _orientation: PhotoOrientation

  constructor(id: number, title: string, orientation: PhotoOrientation){
    super(id, title);
    this._orientation = orientation
  }
  // Comportamiento

  toString(){
    return `[id: ${this.id}, title: ${this.title} orientation: ${this.orientation}]`
  }
  get orientation(){
    return this._orientation
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation
  }
}

class Album extends Item{
  
  private _pictures: Picture[]; 
  
  constructor(id: number, title: string){
    super(id, title)
    this._pictures = []
  } 

  public get pictures(): Picture[] {
    return this._pictures;
  }
  public set pictures(value: Picture[]) {
    this._pictures = value;
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture)
  }
}
const album:Album = new Album(1, 'Personal Picture')
const picture: Picture = new Picture(4, 'Platzi sesion', PhotoOrientation.Portrait)
album.addPicture(picture)

console.log('album ', album);
// picture.id = 100
picture.title = 'Nuevo titulo'
album.title = 'Personal Activities'

console.log('album ', album);

// Esto es un error

// const item = new Item(1, 'Test title')
// console.log('item ', item);

// Probar el miembro estatico
console.log(Picture.photoOrientation.Landscape);