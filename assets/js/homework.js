// Ejercicio 3
// tomando el siguiente array de objetos
// filtrar lo siguiente
// 1. Cantidad de personas que votaron
// 2. Cual es el promedio de Edad de los votantes

//1. Definición de objeto
//2. Creación de una función
//3. usar for in para recorrer el objeto, adentro colocar un if para sólo traer las personas que votaron
//4. colocar un contador
//5. Sumar las edades con un reduce, en una nueva variables
//6. Dividir la suma de las edades entre el contador para conocer el promedio entre los votantes
//

// let persons = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age: 55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]


// const totalAge = arr => {
//     let counter = 0
// 	let total = 0
// 	for(let key in persons) {          
//         if (persons.voted === 'true' ){
//             counter++
//             total += total[key]	
//         }
//     }
//     let result = total / counter
//     console.log(`${counter} personas votaron, con un promedio de edades de ${result} años`)
// 	return total
    
// }
// console.log(totalAge(persons))



// Ejercicio 1
// dado el siguiene array de objetos
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}

   
]

// obtener un nuevo objeto con esta estructura
//-> {
//    'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident'
//      ....
//   }
// hint: .reduce() o .forEach()

//1 Crear un array vacio, usar reduce para colocar el contenido, imprimir el contenido

  

let newArray = []
newArray = users.reduce((acc,cv) => {
	newArray.push(users.firstName + users.lastName + users.role)
	return newArray
},[])
console.log(newArray)










// /** 
//  * Dado un arreglo con nombres de personas, 
//  * devuele un arreglo con los nombres de las personas que empiezan con vocales (capitalizados)
//  * onlyNamesVowels( ['jorge','ana','ivan','sergio','luis','oscar' ] )
//  * -> ['Ana','Ivan','Oscar']
// */

// // const filterStrings = (arr) => {
// // 	let onlyStrings = []
// // 	onlyStrings = arr.filter( (item) => {
// // 		if(item.slice(0,1) === 'a' || item.slice(0,1) === 'e' || item.slice(0,1) === 'i' || item.slice(0,1) === 'o' || item.slice(0,1) === 'u'){
// // 			return item.slice(0,1).toUpperCase() + item.slice(1,-1).toLowerCase()
// // 		}
// // 	})
// //     return onlyStrings	
// // }

// // let originalArr = ['jorge','ana','ivan','sergio','luis','oscar']
// // let result = filterStrings(originalArr)
// // console.log(result)



// // let originalArr = ['jorge','ana','ivan','sergio','luis','oscar']
// // const newOriginalArr = originalArr.filter ( item => {
// //     if(item.slice(0,1) === 'a' || item.slice(0,1) === 'e' || item.slice(0,1) === 'i' || item.slice(0,1) === 'o' || item.slice(0,1) === 'u'){        
// //         return item.slice(0,1).toUpperCase() + item.slice(1,-1).toLowerCase()
// //     }
// // })
// // console.log(newOriginalArr)

// // let originalArr = ['jorge','ana','ivan','sergio','luis','oscar']
// // let arrFiltered = originalArr.filter(item => item.slice(0,1) === 'a' || item.slice(0,1) === 'e' || item.slice(0,1) === 'i' || item.slice(0,1) === 'o' || item.slice(0,1) === 'u')
// // let capitalized = arrFiltered.map(item => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase())
// // console.log(capitalized)




// let originalArr = ['jorge','ana','ivan','sergio','luis','oscar']
// let arrFiltered = originalArr.filter(item => item.toLowerCase().slice(0,1) === 'a' || item.slice(0,1) === 'e' || item.slice(0,1) === 'i' || item.slice(0,1) === 'o' || item.slice(0,1) === 'u')
// .map(item => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase())
// console.log(arrFiltered)







// /*
//  * 
//  * Dado una arreglo compuesto por arreglos, 
//  * crea una funcion que calcule la suma de los arreglos y posteriormente la suma de las sumas
//  * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
//  * 
//  */
// //let originalArr= [[5,8,9,][8,9,5]]


// // const additionMultiArr = [[1,2,3] , [1,3,2] , [3,2,1] ]
// // let res = []
// // additionMultiArr.map(item => {
// //     res.push(item.reduce((acc, cv) => acc + cv))
// // })
// // console.log(res)
// //  let sumaTotal = res.reduce((acc, cv) => acc + cv)
// //  console.log(sumaTotal)






// const sumaArrays = array =>{
//     let res=[]
//     array.map( item => {
//         res.push(item.reduce((acc,cv) => acc + cv))
//     })
//     console.log(res)
//     let sumaTotal = res.reduce((acc, cv) => acc + cv)
//     console.log(`La suma total de los arrays es: ${sumaTotal}`)
// }

// sumaArrays([[1,2,3] , [1,3,2] , [3,2,1]])