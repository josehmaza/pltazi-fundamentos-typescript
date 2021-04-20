let user: object ;
user = {
  id: 1,
  username: 'jmaza',
  firstname: 'Hernan',
  isPro: true
}
console.log(user);
//Esto daria error
// console.log(user.username);
// object vs Object
const myObject =  {
  id: 1,
  username: 'jmaza',
  firstname: 'Hernan',
  isPro: true
}
 let isInstance = myObject instanceof Object
console.log('is Instance ', isInstance);
//Ahora no da error 
console.log(myObject.username);