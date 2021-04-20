//Explicito
let phone: number;
phone = 14;

let otronumero = 47
// otronumero = 'Un error '

let hex: number = 0xAF 
let binary: number = 0b0110
let octal: number = 0o744

console.log(hex)
console.log(binary)
console.log(octal)
// Tiipo: Boolean

let isPro: boolean = false;
///Inferido
let isUserPro = false; 
// isUserPro = 'not'

// String
let userName: string = 'jmaza'
// userName = true

// Template Strings
// Uso de back-tick ``
let userInfo: string;
userInfo = `
Esto es un salto de lineax
  userName => ${userName}
  firstName: ${userName + 'Aviles'}
  phone: ${phone} 
`
console.log(userInfo)