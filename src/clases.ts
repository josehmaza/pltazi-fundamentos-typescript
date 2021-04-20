export {}
enum PhotoOrientation {
  Landscape,
  Portrait,
  Square,
  Panorama
}

class Picture {
  //Propiedades
  private id: number;
  private title: string;
  private orientation: PhotoOrientation

  constructor(id: number, title: string, orientation: PhotoOrientation){
    this.id = id;
    this.title = title;
    this.orientation = orientation
  }
  // Comportamiento

  toString(){
    return `[id: ${this.id}, title: ${this.title} orientation: ${this.orientation}]`
  }

}

class Album {
  private id: number;
  private title: string;
  private pictures: Picture[] 

  constructor(id: number, title: string){
    this.id = id;
    this.title = title
    this.pictures = []
  } 

  addPicture(picture: Picture) {
    this.pictures.push(picture)
  }
}

const album:Album = new Album(1, 'Personal Picture')
const picture: Picture = new Picture(4, 'Platzi sesion', PhotoOrientation.Portrait)
album.addPicture(picture)

console.log('album  => ', album);

//Accediendo a los miembros publicos 
// picture.id = 100
// picture.title = 'Another title'
// album.title = 'Personal activities'

console.log(album);