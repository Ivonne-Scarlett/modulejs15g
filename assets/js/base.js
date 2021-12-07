//Declaración de objetos
// let carObject = {
// 	//key: valor
// 	modelo: 'jetta',
// 	color: 'rojo',
// 	marca: 'VW',
// 	year: 2020,
// 	tenencias : [2019,2020,2021]
// }
// console.log(carObject)
// console.log(carObject.tenencias[2])



// let koder = {
// 	name: 'Ivonne Scarlett',
// 	lastName: 'Chavez',
// 	age: 31,
// 	generacion: 15,
// 	year: [2021,2022],	
// 	type: 'fullstack',	
// }
// console.log(koder)






// // for in
// let counter = 1
// for(let key in koder) {
//     //console.log( key, koder[key])
// 	console.log(`${counter}. ${key} : ${koder[key]}`)
// 	counter++
// }

// 1. name : jorge luis
// 2. lastName : Camarillo
// ...



// Ejercios
/*
 * Del siguiente objeto
 * 1. Contar el numero de empleados
 * 2. Suma total a pagar
 * -> Son 3 empleados y el total es 130000
 */

//  let salarios = {
//     'juan': 30000,
//     'Albert': 50000,
//     'jorge': 50000
// }
// let counter = 0
// let sal = 0
// for(let key in salarios) { 
// 	counter++
// 	sal += salarios[key]	
// }
// console.log(`El número de emplados total es:${counter} y el monto total de salarios es: ${sal}`)



//Arrow function
//Recibir un objeto
//Devolver un array con todas las propiedades que son un string


// let objOnlyStrings = {
// 	modelo: 'jetta',	
// 	marca: 'VW',
// 	color: 'rojo',
// 	year: 2020,
// 	tenencias : [2019,2020,2021],
// 	version: 'sport',
// 	origen: 'México'
// }
// const filterStringObject = contenido => {	
// 	let result = []
// 	for(let key in contenido) { 
// 		if (typeof contenido[key] === 'string' ){			
// 			result.push(key)
// 		}		
// 	}
// 	console.log(result)
// }
// console.log(filterStringObject(objOnlyStrings))

//Ejercicio

// Array de objetos
let koders =  [
    {
        name: 'jorge luis',
        lastName: 'Camarillo',
        age: 30,
        generation: 6,
        modulos: ['js','node js', 'cloud'],
    },
    {
        name: 'Erik',
        lastName: 'Gutierrez',
        age: 20,
        generation: 15,
        modulos: ['js'],
    },
    {
        name: 'Sara',
        lastName: 'Reveles',
        age: 24,
        generation: 12,
        modulos: ['js'],
    }
]
const totalAge = arr => {
	let total = 0
	arr.forEach (element => {
		total += element.age
	})
	return total
}
console.log(totalAge(koders))

const countAge = arr => arr.reduce((acc,val) => acc + val.age,0)
console.log(countAge(koders))


// koders.forEach((element, index, array) => {
//     // console.log(element.lastName)
//     // console.log(element.age)
//     // console.log(element.generation)
//     // console.log(element.modulos)
//     console.log(`${element.name} ${element.lastName} tiene ${element.age} años`)  
// })




