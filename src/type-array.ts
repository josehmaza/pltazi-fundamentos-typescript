// Corchetes []

//Tipo explicito
let users: string[]
users= ['Juan', 'Hernan', 'Arelys']
// users = [1, true]

//Tipo inferido
let otherUsers = ['Juan', 'Hernan', 'Arelys']
// otherUsers = [1]

//Array<Tipo>
let picturesTitles: Array<string>;
picturesTitles = ['favourite sunset', 'landscape']

// Accediendo alos valores en un array

console.log(picturesTitles[0]);

//Propiedades en un array

users.push('aPlatziuser')
users.sort()
console.log(users)