/**
 *
 * Pedir al usuario el dia de la semana
 * p.ej. lunes, martes, ...
 * Imprimir en consola el número del dia de la semana equivalente
 * es decir:
 * domingo -> 1, lunes -> 2, martes -> 3, etc...
 */

 const dayWeek = prompt("¿Qué día de la semana es hoy?")
 const daylower = dayWeek.toLowerCase()
 

 
 switch (dayWeek) {
     case "lunes":
         console.log(`${dayWeek} es el dia 1`)
         break 
     case "martes":
         console.log(`${dayWeek} es el dia 2`)
         break
     case "miercoles":
     case "miércoles":
         console.log(`${dayWeek} es el dia 3`)
         break
     case "jueves":
         console.log(`${dayWeek} es el dia 4`)
         break
     case "viernes":
         console.log(`${dayWeek} es el dia 5`)
         break
     case "sabado":
     case "sábado":
         console.log(`${dayWeek} es el dia 6`)
         break
     case "domingo":
         console.log(`${dayWeek} es el dia 7`)
         break
     default:
         console.error(`Es un día invalido`)
         break
 }

 let grados = prompt('Introduce los grados Celsius actuales de tu Localidad')
let result = 0

result = (grados * 1.8) + 32
alert(result)
//alert(`La conversión es: ${result} °F`)



const numberone = parseInt(prompt("ingresa el primer número"))
const numbertwo = parseInt(prompt("ingresa el segundo número"))
const numberthree = parseInt(prompt("ingresa el tercer número"))
if (!isNaN(numberone) && !isNaN(numbertwo) && !isNaN(numberthree)) {
    if (numberone > numbertwo && numberone>numberthree){
        console.log(`${numberone} es el mayor`)
    }else if (numbertwo > numberone && numbertwo>numberthree) {
        console.log(`${numbertwo} es el mayor`)
    }else if (numberthree> numberone && numberthree>numbertwo) {
        console.log(`${numberthree} es el mayor`)
    }else {
        console.log('Los numeros son iguales')
    }
} else {
    console.error('Ingresa un número, los datos introducidos no corresponden a datos numericos')
}



const clima = prompt("¿Cómo esta el clima en tu ciudad? Ingresa soleado, lluvioso, nevando o nublado")
const gradosC = parseInt(prompt("Ingresa la temperatura de tu Ciudad"))
let convertGrados = 0
convertGrados = (gradosC * 1.8) + 32

if (!isNaN(gradosC)) {
    switch(clima){
        case 'soleado':
        case 'Soleado':
        case 'SOLEADO':  
            console.log(`En tu ciudad el día esta ${clima}, con una temperatura de ${convertGrados}°F`)
            break
        case 'lluvioso':
        case 'Lluvioso':
        case 'LLUVIOSO':  
            console.log(`En tu ciudad el día esta ${clima}, con una temperatura de ${convertGrados}°F`)
            break
        case 'nevando':
        case 'Nevando':
        case 'NEVANDO':  
            console.log(`En tu ciudad el día esta ${clima}, con una temperatura de ${convertGrados}°F`)
            break
        case 'nublado':
        case 'Nublado':
        case 'NUBLADO':  
            console.log(`En tu ciudad el día esta ${clima}, con una temperatura de ${convertGrados}°F`)
            break        
        default:
        console.log('Opción ingresada no permitida')
    }
} else{
    console.log('La temperatura debe ser ingresada en número')
}
