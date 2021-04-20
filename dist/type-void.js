"use strict";
//Void
console.log('Hola');
//Tipo explicito
function showInfo(user) {
    console.log(`User info `, user.id, user.userName, user.firstName);
}
showInfo({
    id: 1,
    userName: 'jmaza',
    firstName: 'Hernan'
});
function showFormattedInfo(user) {
    console.log(`
    User Info
    id: ${user.id}
    userName: ${user.userName}
    firstName: ${user.firstName}
  `);
}
showFormattedInfo({
    id: 1,
    userName: 'jmaza',
    firstName: 'Hernan'
});
// tipo void como tipo de dato, depende delmodo "strict": false, en el tsconfig
/*let unusable: void;
unusable = null;
unusable = undefined */
// TIpo Never
function handleError(code, message) {
    //Process yor code
    // Generate a message
    throw new Error(`${message}. Code: ${code}`);
}
try {
    handleError(404, 'NOT FOUND');
}
catch (error) {
    //console.log(error)
}
/*function sumNumbers(limit: number): never {
  let suma = 0;
  while(true) {
   // suma++;
  }
}

sumNumbers(10)*/ 
