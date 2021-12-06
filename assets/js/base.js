

// const fullname = ['ivonne', 'chavez']
// let fullNameStr = ''
// fullNameStr = fullname.reduce( (acc,cv) =>{		
// 		//return acc + cv
// 		return `${acc} ${cv}`
// }, 'Nombre completo: ')
// console.log(fullNameStr)



const fullname = ['Ivonne', 'Scarlett', 'Chavez', 'Medina']
let fullNameStr = ''
fullNameStr = fullname.reduce( (acc,cv) =>{		
		return acc + cv.slice(0,1)
		//return acc + cv.slice(0,1) + cv.slice(-1)
		//return `${acc} ${cv.slice(0,1)}`
}, 'Las iniciales del nombre son: ')
console.log(fullNameStr)


// let arrRedNumbers = [11,10,9]

// let ressArrReduced = []
// arrRedNumbers.reduce((acc,cv) => {
// 	acc.push(cv * 2)
// 	return acc
// },[])
// console.log(ressArrReduced)














// ['hOla','munDo']
// -> ['Hola','Mundo']

// const capitalizeWithMap = arr => {
// 	let resultCap = [] //text1 = '', text2 = ''
// 	resultCap = arr.map ( palabra => {
// 		if(typeof palabra === 'string'){
// 			resultCap = `${palabra.slice(0,1).toUpperCase()}${palabra.slice(1).toLowerCase()}`
// 			return resultCap
// 		} 
// 	})
// 	return resultCap
	
// }

// let capitalize = (capitalizeWithMap(['hOlA', 'mundo', 123]))
// console.log(capitalize)


// ['hola','mundo',0,5]
// ['hola','mundo']
//Filtrar los que son string

// let arrayFilter = ['hola','mundo',0,5]
// let resultFilter = []

// resultFilter = arrayFilter.filter ( valor => {
// 	if ( typeof valor === 'string'){
// 		return valor
// 	}		 
// })

// console.log(resultFilter)












//arr.forEach()
//Dado un array con sólo números, obtener el valor menor

// const menorFunc = (arr) => {
// 	let menor = arr[0]
// 	arr.forEach( (value, index, array) => {
// 		if( menor > value){
// 			menor = value
// 		}
// 	})
// 	return menor
// }
// console.log( menorFunc( [5, 4, 3, 10] ) )



// .map()
// función
// Dado unn array como parametro 
// capitalizar todos los elementos que sean strings
// typeof variable
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo', 123]

// let capitalizeArr = (['hOlA', 'mundo', 123])

// const capitalizeArr = arr.map ( (val)=> {
// 	if (arr.typeoff = 'string' ){
// 		let resultCap = `${arr.slice(0,1).toUpperCase()}${arr.slice(1).toLowerCase()}`
// 	} 
// 	return
// })
// console.log(resultCap)







// const tablasArrow = (k = 10) => {
//     for (i = 0; i <= k; i++){
//         console.log(`Tabla del ${i}`)
//         for (j = 0; j<= 10; j++){
//              console.log(`${i} * ${j} = ${i*j}`)
//         }
//     }
// 	return
// }
// tablasArrow()


// const sumasArow = (newNum = 10) => {
//     let resultado = 0
//     for (i = 1; i <= newNum; i++){
//         resultado = resultado + i
//     }
//     return console.log(resultado)
// }
// sumasArow()



// const sumaDigitosArow = (cantidad = '1234') => {
//     for (i = 0; i < cantidad.length; i++){
//         sumatoria += parseInt(cantidad[i])
//     }
//     return console.log(sumatoria)
// }
// let digitos = prompt('Introduce una cantidad')
// let sumatoria = 0

// sumaDigitosArow(digitos)



// const sumaMultiplosArow = (j = 3, k = 5) => {
//     let multiplos = 0
//     for (i = 100; i >= 1; i--){        
//         if (i % 3 === 0 && i % 5 ===0){
//             multiplos = multiplos + i
//         }
//     }
//     return console.log(`La suma total de los multiplos es: ${multiplos}`)	
// }
// sumaMultiplosArow()



//Arrays




















// function funPalindrome(wordUser){
// 	const wordUser = prompt('Dame una palabra ').trim().toLowerCase()
// 	let wordWithoutSpace = ''
// 	let wordReversed = ''

// 		if(wordUser != ''){
		
// 			for(i = 0; i < wordUser.length; i++){
// 				if(wordUser[i] !== ' '){
// 					wordWithoutSpace = wordWithoutSpace +  wordUser[i]
// 				}
// 			}
			
		
// 			for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
// 				wordReversed = wordReversed + wordWithoutSpace[j]
// 			} 
			

// 			wordWithoutSpace === wordReversed ?
// 				console.log(`La palabra "${wordUser}" es un palindromo`)
// 			:
// 				console.log(`La palabra "${wordUser}" No es un palindromo`)
			

// 		} else {
// 			console.log('Inserta una palabra valida')
// 		}
	
// }

// const wordUser = prompt('Dame una palabra ').trim().toLowerCase()
// let wordWithoutSpace = ''
// let wordReversed = ''

// funPalindrome(wordUser)






// función que pida el nombre del usuario
// y lo imprima en consola
/*
function consoleName(name){	
	console.log(name)
}
let nameVariable = prompt('Ingresa tu nombre')
consoleName(nameVariable)
*/


// Función que reciba una palabra y la retorne al reves
/*
function nameReverse(nameStar){
	let word = prompt('Ingresa una oración').trim().toLowerCase()
	let wordReverse = ''
	
	for(i = word.length - 1; i >= 0; i--){
			wordReverse = wordReverse + word[i]
	}
	return textReverse
	
}
let result = nameReverse()
console.log(result)
*/


/*let text = prompt("Ingresa una Frase").toLowerCase().trim()
text = `${text[0].toUpperCase()}${text.substring(1)}`
//console.log(text)

for (let i = 0; i < text.length; i++) {	
	if (text[i]==" ") {
		text = text.substring(0,text[i+1])
        
	}
}

console.log(text[i])
*/










