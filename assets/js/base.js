function funPalindrome(wordUser){
	//const wordUser = prompt('Dame una palabra ').trim().toLowerCase()
	//let wordWithoutSpace = ''
	//let wordReversed = ''

		if(wordUser != ''){
		
			for(i = 0; i < wordUser.length; i++){
				if(wordUser[i] !== ' '){
					wordWithoutSpace = wordWithoutSpace +  wordUser[i]
				}
			}
			
		
			for(j = wordWithoutSpace.length - 1; j >= 0 ; j--){
				wordReversed = wordReversed + wordWithoutSpace[j]
			} 
			

			wordWithoutSpace === wordReversed ?
				console.log(`La palabra "${wordUser}" es un palindromo`)
			:
				console.log(`La palabra "${wordUser}" No es un palindromo`)
			

		} else {
			console.log('Inserta una palabra valida')
		}
	
}

const wordUser = prompt('Dame una palabra ').trim().toLowerCase()
let wordWithoutSpace = ''
let wordReversed = ''

funPalindrome(wordUser)






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










