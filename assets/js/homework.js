/**
 * arr.forEach()
 * Dado el siguiente array 
 * ['string','value','min','asdfghjk']
 * Hacer una funcion que devuelva el string con mas caracteres
 * 
 */

//  const mostLarge  = (arr) => {
//     let newLarge = []
// 	arr.forEach( value => {
// 		let newText = console.log(prompt('Ingresa los caracteres adicionales'))		
//         newLarge = value.concat(newText)        
// 	})
// 	return newLarge
// }

// let arrayOriginal = ['string','value','min','asdfghjk']
// let result = mostLarge(arrayOriginal)
// console.log(result)




/**
 * arr.map()
 * Dado un array 
 * Hacer una funcion que devuelva el mismo array
 * Pero con los items al reves
 * P.ej. reverseStringArr( ['string','value','min'] )
 * Salida: ['gnirts','eulav','nim']
 * 
 */


// const reverseStringArr = (arr) => {

// 	let newString =  []
// 	textReverse = arr.map( element => element.reverse() )
// }

// let originalArr = ['string','value','min']
// let result = reverseStringArr(originalArr)
// console.log(result)



/**
 * arr.filter(), .map()
 * Funcion que reciba un array de strings y numeros
 * Filtre solo los strings
 * luego, Capitalice cada string
 * luego, filtre solo los que tengan mas de 5 caracteres
 * y al final, los que tengan al menos 2 letras "a" 
 * 
 * p.ej.  filterStrings( ['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0] )
 * Salida -> ['Guadalajara', 'Caracas']
 */


 const filterStrings = (arr) => {
	let onlyStrings = []
	onlyStrings = arr.filter( (item) => {
		if(typeof item === 'string') {
			return item
		}
	})

	let toUpper = []
	toUpper = onlyStrings.map( (item) => {
		return item.slice(0,1).toUpperCase() + item.slice(1,-1).toLowerCase()
	})

	let onlytext5 = []
	onlytext5 = toUpper.filter( (item ) => { 
		if ( item.length > 4 ) {
			return item
		}
	})

	let textA = []
	textA = onlytext5.filter( (item ) => { 
		if ( item.split('a').length > 2 ) {
			return item
		}
	})

	return textA
}

let originalArr = ['guadalajara', 3, 'caracas', 'Oslo', 'brasil', 0]
let result = filterStrings(originalArr)
console.log(result)