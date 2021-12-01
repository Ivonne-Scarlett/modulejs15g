function tablas(j = 10){
    for (i = 0; i <= 10; i++){
        console.log(`Tabla del ${i}`)
        for (j = 0; j<= 10; j++){
            console.log(`${i} * ${j} = ${i*j}`)
        }
    }
}
tablas()



function sumasN (newNum = 10){
    let resultado = 0
    for (i = 0; i <= newNum; i++){
        resultado = resultado + i
    }
    console.log(resultado)
}
sumasN()



function sumaDigitos(cantidad = '1234'){
    for (i = 0; i < cantidad.length; i++){
        sumatoria += parseInt(cantidad[i])
    }
    console.log(sumatoria)
}
let digitos = prompt('Introduce una cantidad')
let sumatoria = 0

sumaDigitos(digitos)


function sumaMultiplos(j = 3, k = 5){
    let multiplos = 0
    let j = parseInt(prompt('Introduce el número de multiplos que deseas obtener'))
    let k = parseInt(prompt('Introduce el número de multiplos que deseas obtener'))
    for (i = 100; i >= 1; i--){        
        if (i % 3 === 0 && i % 5 ===0){
            multiplos = multiplos + i
        }
    }
    console.log(`La suma total de los multiplos es: ${multiplos}`)
}
sumaMultiplos()