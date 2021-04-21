export {};

let user: [number, string]
user = [3, 'jmaza']

console.log(user);
console.log(user[0]);
console.log(user[1].length);

// tuplas con varios valores
//idUser, username, isPro

let userInfo: [number, string, boolean]
userInfo = [2, 'paparazzi', true]
console.log(userInfo[1]);

//Arreglo de tuplas
let array: [number, string][] = [];
array.push([1, 'hmaza'])
array.push([3, 'pmaza'])
array.push([5, 'czambrano'])
console.log(array);

array[2][1] = array[2][1].concat('001')
console.log(array);