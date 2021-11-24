let number1 = parseInt(prompt('Introduce el primer número que requieres'))
let number2 = parseInt(prompt('Introduce el segundo número que requieres'))
let result = 0

if(number1 > number2){
    result = number1 / number2
    console.log('La division es:', result)
}else if(number1 < number2){
    result = number1 + number2
    console.log('La suma es:', result)
}else if(number1==number2){
    result = number1 * number2
    console.log('La multiplicacion es:', result)
}