export {}
// 10, '10'

let idUser: number | string 
idUser = 14
idUser = '14'

function getUsernamById(id: number | string){
  //Logica de negocio, find the user
  return 'jmaza'
}

console.log(getUsernamById(20))
console.log(getUsernamById('20'));

type IdUser = number | string
type Username = string
let miusuario: IdUser

function getUsernameByIdx(id: IdUser): Username{
  return 'x'
}
// Alias de tipo: TS
getUsernameByIdx(320)

// Tipos literales
//100x100 500x500
type SquareSize = '100x100' | '500x500' | '1000x1000'

let smallPicture: SquareSize = '1000x1000'
//Esto es un error
//let otherPicture: SquareSize = '20'