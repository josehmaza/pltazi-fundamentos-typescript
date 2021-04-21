// <> Angle bracket

let username: any;
username = 'jmazaxx'

// Asumimos que tenemos una cadena
let message: string = (<string>username).length > 5 ? 
  `Welcome ${username}` : `Username is too short`

console.log(`message ${message}`);

let usernamWithId: any = 'jmaza 1'
// Como obtener el username ?
username = (<string>usernamWithId).substring(0, 5)

console.log(`Username only ${username}`);

message = (username as string).length > 5 ? 
  `Welcome ${username}` : `Username is too short`

console.log(`The message es => ${message}`);



