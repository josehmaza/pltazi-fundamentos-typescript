export {}
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}
class Item {
  private _id: number;
 
  private _title: string; 
  
  constructor(id: number, title: string){
    this._id = id
    this._title = title
  }
  get id(): number {
    return this._id;
  }
  set id(value: number) {
    this._id = value;
  }
  get title(): string {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }
}
class Picture extends Item{
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
picture.id = 100
picture.title = 'Nuevo titulo'
album.title = 'Personal Activities'

console.log('album ', album);