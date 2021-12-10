/**
 * Selecionar elementos
 * 
 * 1. Selecionar por ID
 */

// //  1. Selecionar por ID
// document.getElementById('head__title') 
// document.getElementsByTagName('li')
// document.getElementsByClassName('link__menu')

// document.querySelector('#head__title')
// document.querySelector('li')
// document.querySelector('.link__menu')
// document.querySelectorAll('.link__menu')
// // document.querySelectorAll('')

// /**
//  * Obtener atributos
//  * Setear atributos
//  */

// // get
// let title = document.querySelector('#head__title').getAttribute('data-title')
// let level = document.querySelector('#head__title').getAttribute('data-level')

// // set
// document.querySelector('#head__title').setAttribute('data-custom','random')
// // reemplazando clases 
// document.querySelector('#head__title').setAttribute('class','trees cuatro')

// // Agregar clases
// document.querySelector('#head__title').classList.add('clase3')
// // remover clases
// document.querySelector('#head__title').classList.remove('clase2')

// // comprobar si existe un atributo
// document.querySelector('#head__title').hasAttribute('class')


// comprobar si el titulo tiene class
/**
 * Si si, comprobar 
 * ---si tiene la clase "clase1 clase2"
 * ----- Agregar la "clase 3"
 * ---sino 
 * ----- Agregar la clase "custom"
 */
 


 let elemenTitle = document.querySelector('#head__title')
 if( elemenTitle.hasAttribute('class') ) {
     if( elemenTitle.getAttribute('class') === 'clase1 clase2' ) {
         elemenTitle.classList.add('clase3')
     } else {
         elemenTitle.classList.add('custom')
     }
 }
 

 // createElement('tag')
// textContent
// appendChild

// let ulElement = document.createElement('ul')
// // <ul></ul>

// let liFirst = document.createElement('li')
// // <li></li>
// liFirst.textContent = 'item 1'
// // <li>item 1</li>
// ulElement.appendChild(liFirst)
// // <ul> <li>item 1</li> </ul>

// let liSecond = document.createElement('li')
// // <li></li>
// liSecond.textContent = 'item 2'
// // <li>item 2</li>
// ulElement.appendChild(liSecond)
// // <ul> <li>item 1</li> <li>item 2</li> </ul>

// document.getElementsByTagName('body')[0].appendChild(ulElement)
// // body -> <ul> <li>item 1</li> <li>item 2</li> </ul>


if( elemenTitle.hasAttribute('class') ) {    
        elemenul.classList.add('menu')
}


let ulElement = document.createElement('ul')
// <ul></ul>

let liFirst = document.createElement('li')
// <li></li>
liFirst.textContent = 'Home'
// <li>item 1</li>
ulElement.appendChild(liFirst)
// <ul> <li>item 1</li> </ul>

let liSecond = document.createElement('li')
// <li></li>
liSecond.textContent = 'Products'

let liTres = document.createElement('li')
// <li></li>
liTres.textContent = 'About Us'
// <li>item 2</li>
ulElement.appendChild(liSecond)
// <ul> <li>item 1</li> <li>item 2</li> </ul>

document.getElementsByTagName('body')[0].appendChild(ulElement)
// body -> <ul> <li>item 1</li> <li>item 2</li> </ul>


















// data attributes
// propiedades personalizadas



/**
 * Seleccionar padres e hijos (traversing)
 */


/**
 * Manipular elementos del DOM
 */


// //Seleccionar elementos
// //Seleccionar por ID
// document.getElementById('head__title') //el ID es único e irrepetible

// document.getElementsByTagName('li') //regresa como array, todos los li del documento

// document.getElementsByClassName(link__menu) //regresa un array de elementos con objeto

// document.querySelector('#head__title') //regresa lo mismo que elementbyID
// document.querySelector('link__menu') // selecciona solo el primer UL
// //document.querySelectorAll('link__menu') //selecciona todos los ul 

// //Obetener atributos y setear atributos
// let result = document.querySelector('#head__title').getAttribute('data-title') //regresa el data title
// console.log(result)



//Seleccionar padres e hijos


//Manipular elementos del DOM




// let koder = {
//     name:"jorge",
//     lastName:"Camarillo",
//     age: 30,
//     average: [10, 10, 10, 8, 9]
//     // getFullName: function () {
//     //     console.log(this)
//     //     return `${ this.name } ${ this.lastName } ${this.age}`
//     // }
// }

// koder.getFullName = function () {
//     console.log(this)
//     return `${ this.name } ${ this.lastName } ${this.age}`
// }

// koder.getAverage = function (){
//     let counter = 0
//     sumAverage = 0
//     for(let key in koder) {        
//         counter++
// 	    let sumReduce = koder.average.reduce( (acc, cv) => {
//             return sumAverage += acc             
//         }, [0] )
// 	    let prom = sumAverage / counter
//         return prom
//     }
//     return   
// }

// //console.log(koder.getFullName())

// console.log(koder.getAverage())
// // -> 9.4







// // let salarios  = {
// //     'jorge':  3000,
// //     'juan':  7000,
// //     'Pedro':  8000
// // }

// // // let empleados = []
// // // for( item in salarios){
// // //     empleados.push(item)
// // //     //console.log(salarios[item])
// // // }

// // //console.log( Object.keys(salarios) )


// // // const sumarSalarios = (obj) => {
// // //     let suma = 0
// // //     Object.keys(obj).forEach( (empleado, index, arr) => {
// // //         let salario = obj[empleado]
// // //         suma = suma + salario
// // //         // suma += salario
// // //     })
// // //     return suma
// // // }
// // // console.log(sumarSalarios(salarios))



// // // const sumarSalariosRed = (obj) => {
// // //     let suma = 0
// // //     suma = Object.keys(obj).reduce( (acc, key) => {
// // //         return acc + obj[key]
// // //     }, 0)
// // //     return suma
// // // }
// // // console.log(sumarSalariosRed(salarios))




// // // const addArr = (obj) => {
// // //     let suma = 0
// // //     suma = Object.values(obj).reduce((previousValue, currentValue) => {
// // //         return previousValue += currentValue
// // //     }, 0)

// // //     return suma
// // // }
// // // console.log(addArr(salarios))


// // // const addArrOneLine = (obj) => Object.values(obj).reduce((acc, cv) => acc += cv, 0)
// // // console.log(addArrOneLine(salarios))





// // //  * Ejercicio 1.
// // //  * Dado un objeto inicial, hacer los siguientes puntos 
// // //  * 
// // //  * 1. Agregar el lenguaje 'Go' a la lista de lenguajes
// // //  * 2. Cambiar el nivel a 4
// // //  * 3. Eliminar la propiedad avatar
// // //  * 4. Agregar una nueva propiedad de edad y poner el valor de 30
// // //  * 5. Imprimir en consola todos los lenguajes dominados
// // //  * 6. Clonar el objeto en uno nuevo
// // //  * 7. Imprimir en consola el nuevo objeto
// // //  * 
// // //  * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// // //  */

// //  let koder = {
// //     languages: ["JavaScript", "Python", "Ruby"],
// //     isMentor: true,
// //     level: 3,
// //     avatar: "https://picsum.photos/200/300"
// // }

// // koder.languages = ["JavaScript", "Python", "Ruby", "Go"]
// // koder.level = 4
// // delete koder.avatar
// // koder['age'] = 30

// // console.log(koder.languages)


// // //para clonar objetos
// // let newObj = {...koder} //... sirven para iterar con cada valor adentro del objeto
// // console.log(koder, newObj)


// // /*
// //  * Ejercicio 2:
// //  * Escribir una funcion que reciba un parametro
// //  * Verificar si el parametro es un objeto
// //  * o si es un array
// //  * p.ej.  
// //  * ·> isAnObjectOrArray( [1,2,3] )
// //  * -> 'Es un array'
// //  * ·> isAnObjectOrArray( {key:'value'} )
// //  * -> 'Es un Objeto'
// //  * ·> isAnObjectOrArray( 'Hola mundo' )
// //  * -> 'No es un array ni un objeto'
// //  * 
// //  * 
// //  * @params {Object}, [Array] ,'string' - Estructura que se quiere validar
// //  * @return 'String' - mensaje de respuesta
// //  * 
// //  * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// //  * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
// //  * 
// //  */

// //  const isAnObjectOrArray = (element) => {

// // }



// // /**
// //  * Ejercicio 3.
// //  * Realizar una funcion que tome como parametro un objeto
// //  * y devuelva un array de arrays con la siguiente estructura
// //  * [ [key, value], [key, value] ]
// //  * Resultado esperado: makePairs({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
// //  * 
// //  * @params {Object} object - El objeto que queremos transformar
// //  * @return [Array] - El array que se espera retornar
// //  * 
// //  * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// //  * @hint https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// //  * 
// //  * Se tiene que realizar 2 soluciones, 1 con Object.entries() y otra con .map()
// //  */

// //  let objOnlyStrings =  {
// //     modelo: 'jetta',
// //     marca: 'VW',
// // }

// //  const makePairs = (object) => {
    
// // }



// //Declaración de objetos
// // let carObject = {
// // 	//key: valor
// // 	modelo: 'jetta',
// // 	color: 'rojo',
// // 	marca: 'VW',
// // 	year: 2020,
// // 	tenencias : [2019,2020,2021]
// // }
// // console.log(carObject)
// // console.log(carObject.tenencias[2])



// // let koder = {
// // 	name: 'Ivonne Scarlett',
// // 	lastName: 'Chavez',
// // 	age: 31,
// // 	generacion: 15,
// // 	year: [2021,2022],	
// // 	type: 'fullstack',	
// // }
// // console.log(koder)






// // // for in
// // let counter = 1
// // for(let key in koder) {
// //     //console.log( key, koder[key])
// // 	console.log(`${counter}. ${key} : ${koder[key]}`)
// // 	counter++
// // }

// // 1. name : jorge luis
// // 2. lastName : Camarillo
// // ...



// // Ejercios
// /*
//  * Del siguiente objeto
//  * 1. Contar el numero de empleados
//  * 2. Suma total a pagar
//  * -> Son 3 empleados y el total es 130000
//  */

// //  let salarios = {
// //     'juan': 30000,
// //     'Albert': 50000,
// //     'jorge': 50000
// // }
// // let counter = 0
// // let sal = 0
// // for(let key in salarios) { 
// // 	counter++
// // 	sal += salarios[key]	
// // }
// // console.log(`El número de emplados total es:${counter} y el monto total de salarios es: ${sal}`)



// //Arrow function
// //Recibir un objeto
// //Devolver un array con todas las propiedades que son un string


// // let objOnlyStrings = {
// // 	modelo: 'jetta',	
// // 	marca: 'VW',
// // 	color: 'rojo',
// // 	year: 2020,
// // 	tenencias : [2019,2020,2021],
// // 	version: 'sport',
// // 	origen: 'México'
// // }
// // const filterStringObject = contenido => {	
// // 	let result = []
// // 	for(let key in contenido) { 
// // 		if (typeof contenido[key] === 'string' ){			
// // 			result.push(key)
// // 		}		
// // 	}
// // 	console.log(result)
// // }
// // console.log(filterStringObject(objOnlyStrings))

// //Ejercicio

// // Array de objetos
// // let koders =  [
// //     {
// //         name: 'jorge luis',
// //         lastName: 'Camarillo',
// //         age: 30,
// //         generation: 6,
// //         modulos: ['js','node js', 'cloud'],
// //     },
// //     {
// //         name: 'Erik',
// //         lastName: 'Gutierrez',
// //         age: 20,
// //         generation: 15,
// //         modulos: ['js'],
// //     },
// //     {
// //         name: 'Sara',
// //         lastName: 'Reveles',
// //         age: 24,
// //         generation: 12,
// //         modulos: ['js'],
// //     }
// // ]
// // const totalAge = arr => {
// // 	let total = 0
// // 	arr.forEach (element => {
// // 		total += element.age
// // 	})
// // 	return total
// // }
// // console.log(totalAge(koders))

// // const countAge = arr => arr.reduce((acc,val) => acc + val.age,0)
// // console.log(countAge(koders))


// // koders.forEach((element, index, array) => {
// //     // console.log(element.lastName)
// //     // console.log(element.age)
// //     // console.log(element.generation)
// //     // console.log(element.modulos)
// //     console.log(`${element.name} ${element.lastName} tiene ${element.age} años`)  
// // })




