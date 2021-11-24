/*
    Pedir al usuario por prompt un numero entre 1 y 100
    verificar si es un par o impar
    imprimir en resultado en consola
    Máximo de lineas para este ejercicio, 2 lineas de código
    Sugerencia: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
*/
const number = ( parseInt(prompt('Ingresa un valor entre el 1 y el 100')) % 2 == 0 ) ? 'par' : 'impar'
console.log(number)


/* 
    Pedir al usuario el día de la semana 
    p.ej. lunes, martes, ...
    Imprimir en consola el número del día de la semana equivalente
    es decir:
    domingo -> 1, lunes -> 2, martes -> 3, etc ...
*/
const day = prompt('Ingresa el día de la semana(Introduce el día en minusculas y sin acentos)')
if (day=='lunes'){
    console.log('Día de la semana equivalente a 1')
}else if (day=='martes'){
    console.log('Día de la semana equivalente a 2')
}else if (day=='miercoles'){
    console.log('Día de la semana equivalente a 3')
}else if (day=='jueves'){
    console.log('Día de la semana equivalente a 4')
}else if (day=='viernes'){
    console.log('Día de la semana equivalente a 5')
}else if (day=='sabado'){
    console.log('Día de la semana equivalente a 6')
}else if (day=='domingo'){
    console.log('Día de la semana equivalente a 7')
}else{
    console.log('Por favor introduce el día en minusculas, sin acentos y sin espacios')
}


/* 
    Pedir al usuario 2 numeros 
    Imprimir en consola cual es el menor de los 2
    Imprimir en consola cual es el mayor de los 2
*/
const number1 = parseInt(prompt('Ingresa el primer número'))
const number2 = parseInt(prompt('Ingresa el segundo número'))
if (number1 < number2){
    console.log('El número menor es:', number1)
    console.log('El número mayor es:', number2)
}else if (number1 > number2){
    console.log('El número menor es:', number2)
    console.log('El número mayor es:', number1)
}else{
    console.warn('Los números introducidos son iguales')
}
