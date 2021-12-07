
/** 
 * Dado un arreglo con nombres de personas, 
 * devuele un arreglo con los nombres de las personas que empiezan con vocales (capitalizados)
 * onlyNamesVowels( ['jorge','ana','ivan','sergio','luis','oscar' ] )
 * -> ['Ana','Ivan','Oscar']
*/

// const filterStrings = (arr) => {
// 	let onlyStrings = []
// 	onlyStrings = arr.filter( (item) => {
// 		if(item.slice(0,1) === 'a' || item.slice(0,1) === 'e' || item.slice(0,1) === 'i' || item.slice(0,1) === 'o' || item.slice(0,1) === 'u'){
// 			return item.slice(0,1).toUpperCase() + item.slice(1,-1).toLowerCase()
// 		}
// 	})
//     return onlyStrings	
// }

// let originalArr = ['jorge','ana','ivan','sergio','luis','oscar']
// let result = filterStrings(originalArr)
// console.log(result)



// let originalArr = ['jorge','ana','ivan','sergio','luis','oscar']
// const newOriginalArr = originalArr.filter ( item => {
//     if(item.slice(0,1) === 'a' || item.slice(0,1) === 'e' || item.slice(0,1) === 'i' || item.slice(0,1) === 'o' || item.slice(0,1) === 'u'){        
//         return item.slice(0,1).toUpperCase() + item.slice(1,-1).toLowerCase()
//     }
// })
// console.log(newOriginalArr)

// let originalArr = ['jorge','ana','ivan','sergio','luis','oscar']
// let arrFiltered = originalArr.filter(item => item.slice(0,1) === 'a' || item.slice(0,1) === 'e' || item.slice(0,1) === 'i' || item.slice(0,1) === 'o' || item.slice(0,1) === 'u')
// let capitalized = arrFiltered.map(item => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase())
// console.log(capitalized)




let originalArr = ['jorge','ana','ivan','sergio','luis','oscar']
let arrFiltered = originalArr.filter(item => item.toLowerCase().slice(0,1) === 'a' || item.slice(0,1) === 'e' || item.slice(0,1) === 'i' || item.slice(0,1) === 'o' || item.slice(0,1) === 'u')
.map(item => item.slice(0,1).toUpperCase() + item.slice(1).toLowerCase())
console.log(arrFiltered)







/*
 * 
 * Dado una arreglo compuesto por arreglos, 
 * crea una funcion que calcule la suma de los arreglos y posteriormente la suma de las sumas
 * additionMultiArr(  [	[1,2,3] , [1,3,2] , [3,2,1] ] )
 * 
 */
//let originalArr= [[5,8,9,][8,9,5]]


// const additionMultiArr = [[1,2,3] , [1,3,2] , [3,2,1] ]
// let res = []
// additionMultiArr.map(item => {
//     res.push(item.reduce((acc, cv) => acc + cv))
// })
// console.log(res)
//  let sumaTotal = res.reduce((acc, cv) => acc + cv)
//  console.log(sumaTotal)






const sumaArrays = array =>{
    let res=[]
    array.map( item => {
        res.push(item.reduce((acc,cv) => acc + cv))
    })
    console.log(res)
    let sumaTotal = res.reduce((acc, cv) => acc + cv)
    console.log(`La suma total de los arrays es: ${sumaTotal}`)
}

sumaArrays([[1,2,3] , [1,3,2] , [3,2,1]])