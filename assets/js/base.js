let a = parseInt(prompt('Introduce el primer número que requieres'))
let b = parseInt(prompt('Introduce el primer número que requieres'))
let c = 0

if(a > b){
    c = a / b
    console.log('La division es:', c)
}else if(a < b){
    c = a + b
    console.log('La suma es:', c)
}else if(a==b){
    c = a * b
    console.log('La multiplicacion es:', c)
}