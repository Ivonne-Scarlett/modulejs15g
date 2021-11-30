/* 
 * Ejercicio 1
 * imprimir en consola todos los numeros pares entre 1 y 100
 * -> 2
 * -> 4
 * -> 100
*/
/* 
console.log(`Los números pares del 1 al 100 son los siguientes:`)
for (i = 1; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i)        
    }
}
*/





/*
 * Ejercicio 2
 * Pedir al usuario un string
 * Invertir el orden e imprimir en consola
 * Entrada: "reverso"
 * Salida: -> esrever
 * pista: https://www.w3schools.com/jsref/jsref_length_string.asp
*/
/*
let word = prompt('Ingresa una oración').trim().toLowerCase()
let wordReverse = ''

for(i = word.length; i >= 0; i--){
    if(word[i] == ' '){
        wordReverse += ' ' + word[i - 1]
        i = i - 1
    } else {
        wordReverse = wordReverse + word[i]
    }
}

let textReverse = wordReverse.substring(0,1).toUpperCase() + wordReverse.substring(1)
console.log('la palabra en reversa es:',textReverse)
*/





/*
 * Ejercicio 3 
 * Declarar una cadena de al menos 2 palabras
 * Imprimir en consola el string separado por guiones en cada palabra
 * "hola koders"
 * "hola-koders"
 * pista: https://www.w3schools.com/jsref/jsref_replace.asp
 */
/*
let word = prompt('Ingresa una oración')
let result = word.replace(' ' ,'-')
console.log('El texto ingresado es:',result)
*/




/*
 * Ejercicio 4
 * Declarar un string con un correo electrónico
 * Enmascarar con "*" el bloque del usuario
 * "jorgec@kodemia.mx"
* "*** @kodemia .mx"
 * 
 * pista: https://www.w3schools.com/jsref/jsref_slice_string.asp
 * pista: https://www.w3schools.com/jsref/jsref_indexof.asp
 */
/*
let mail = prompt('Ingresa un correo electrónico')
let encript = ''

for(i = 0; i < mail.length; i++){
    if(mail[i] == '@'){
        while(){
            let result = mail.replace(' ' ,'@')
        }
        
        i = i + 1
    } else {
        encript = encript + mail[i]
    }
}
*/





// For solution
/*
const wordUser = prompt('Dame una palabra ').trim().toLowerCase()

let wordWithoutSpace = ''
let wordReversed = ''

if(wordUser != ''){
    // Remove White space
    for(i = 0; i < wordUser.length; i++){
        if(wordUser[i] !== ' '){
            wordWithoutSpace = wordWithoutSpace +  wordUser[i]
        }
    }
    console.log(wordWithoutSpace)

    // word reversed  
    /*
    for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
        wordReversed = wordReversed + wordWithoutSpace[j]
    } 
    console.log(wordReversed)
    */
   /*while (j >= 0){
        let j = wordWithoutSpace.length - 1
        wordReversed = wordReversed + wordWithoutSpace[j]
        j--       
   }


    wordWithoutSpace === wordReversed ?
        console.log(`La palabra "${wordUser}" es un palindromo`)
    :
        console.log(`La palabra "${wordUser}" No es un palindromo`)

} else {
    console.log('Inserta una palabra valida')
}
*/

//Imprimir en consola la suma de multiplos de 5 y 3

/*let multiplo3 = 0

for (i = 100; i >= 1; i--){
    if(i % 3 === 0 && i % 5 === 0 ){
        multiplo3 = multiplo3 + i        
    }
}
console.log(`La suma total de los multiplos es: ${multiplo3}`)
*/