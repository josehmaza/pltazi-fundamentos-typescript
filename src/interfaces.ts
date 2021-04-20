export {}
// function para mostrar una fotografia
enum PhotoOrientation {
  Landscape = 3,
  Portrait = 4,
  Square = 8 ,
  Panorama = 16
}

interface Picture {
  title: string,
  date: string, 
  orientation: PhotoOrientation,
  extra?: string
}

function showPicture(picture: Picture){
  
    console.log(`[title: ${picture.title}, date: ${picture.date}
    orientation: ${picture.orientation}        
  ]`);
}

let myPic = {
  title: 'Test title',
  date: '2020-03',
  orientation: PhotoOrientation.Landscape
}

showPicture(myPic)
showPicture({
  title: 'Test title',
  date: '2020-03',
  orientation: PhotoOrientation.Panorama,
  extra: 'test'
})

interface PictureConfig{
  title?: string;
  date?: string;
  orientation?: PhotoOrientation
}

function generatePicture(config: PictureConfig) {
  const pic = {title: 'Default', date: '2020-03'}
  if(config.title){
    pic.title = config.title
  }
  if(config.date){
    pic.date = config.date
  }
  return pic
}

let picture = generatePicture({
  title: 'Travle Pic'  
})

console.log(`picture `, picture);

//Interfaz: Usuario
interface User {
  readonly id: number;
  username: string;
  isPro: boolean;
}

let user: User ;
user = {
  id: 10, 
  username: 'jmaza',
  isPro: true
}

console.log('user ', user);
user.username = 'paparazzi'
//Esto ya no se puede hace
// user.id = 14
console.log('user ', user);

