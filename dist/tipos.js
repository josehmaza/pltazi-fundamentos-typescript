"use strict";
//Explicito
let phone;
phone = 14;
let otronumero = 47;
// otronumero = 'Un error '
let hex = 0xAF;
let binary = 0b0110;
let octal = 0o744;
console.log(hex);
console.log(binary);
console.log(octal);
// Tiipo: Boolean
let isPro = false;
///Inferido
let isUserPro = false;
// isUserPro = 'not'
// String
let userName = 'jmaza';
// userName = true
// Template Strings
// Uso de back-tick ``
let userInfo;
userInfo = `
Esto es un salto de lineax
  userName => ${userName}
  firstName: ${userName + 'Aviles'}
  phone: ${phone} 
`;
console.log(userInfo);
