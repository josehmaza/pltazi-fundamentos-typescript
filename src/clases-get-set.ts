export {}
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //Propiedades
  private _id: number;
  private _title: string;
  private _orientation: PhotoOrientation

  constructor(id: number, title: string, orientation: PhotoOrientation){
    this._id = id;
    this._title = title;
    this._orientation = orientation
  }
  // Comportamiento

  toString(){
    return `[id: ${this._id}, title: ${this._title} orientation: ${this._orientation}]`
  }
  get id(){
    return this._id
  }
  set id(id: number){
    this._id = id
  }

  get title(){
    return this._title
  }
  set title(title: string) {
    this._title = title
  }
  get orientation(){
    return this._orientation
  }
  set orientation(orientation: PhotoOrientation) {
    this._orientation = orientation
  }
}

class Album {
  private _id: number;
  
  
  private _title: string;
  
  private _pictures: Picture[]; 
  
  constructor(id: number, title: string){
    this._id = id;
    this._title = title
    this._pictures = []
  } 
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
  public get title(): string {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
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