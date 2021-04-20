// Orientacion en fotografias
// const landscape = 0;
// const portrait = 1
// const square = 2
// const panorama = 3;
enum PhotoOrientation {
  Landscape = 3,
  Portrait = 4,
  Square = 8 ,
  Panorama = 16
}

let landscape: PhotoOrientation = PhotoOrientation.Landscape
console.log(landscape);
console.log(`Landscape es => ${PhotoOrientation[landscape]}`);

enum PictureOrientation {
  Landscape = 10,
  Portrait,
  Square = 20 ,
  Panorama 
}

console.log(`POrtrait  => ${PictureOrientation.Panorama}`);

enum Country {
  BOLIVIA = 'bol',
  COLOMBIA = 'col',
  EEUU = 'usa'
}

const pais = Country.EEUU
console.log(`El pais  es ${pais}`);
