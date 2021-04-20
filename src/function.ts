type SquareSize = '100x100' | '500x500' | '1000x1000'

// Usamos TS, definimos tipos para parametros
function createPicture(title?: string, date?: string, size?: SquareSize){
  // Se crea la fotografia
  console.log('create picture using ', title, date, size);

}
createPicture('My birthday', '2020-03-10', '100x100')
// parametros opcionales
createPicture('My birthday', '2020-03-10')
createPicture('My birthday')

// Flat array functions
let createPic = (title: string, date: string, size: SquareSize): object => {
  return {
    title, date, size
  }
}

const picture = createPic('Platzi sesion', '2020-03-10', '1000x1000')
console.log('picture ', picture);

// Tipo de retorno con TS

function handleError(code: number, message: string): string | never {
  //Procesamiento del codigo,  mensaje
  if(message === 'error' ){
    throw new Error(`${message}. Code error: ${code}`)
  }else {
    return 'An error has occurrred'
  }

}


try {
  let result = handleError(200, 'OK')
  console.log('result ', result);

  result = handleError(404, 'error')
  console.log('result ', result);
} catch (error) {
  console.log(error);
}