let koder = {
    name:"jorge",
    lastName:"Camarillo",
    age: 30,
    average: [10, 10, 10, 8, 9]
    // getFullName: function () {
    //     console.log(this)
    //     return `${ this.name } ${ this.lastName } ${this.age}`
    // }
}

koder.getFullName = function () {
    console.log(this)
    return `${ this.name } ${ this.lastName } ${this.age}`
}

koder.getAverage = function (){
    let sum = this.average.reduce((acc,cv) => acc += cv, 0)
    let total = this.average.length
    let av = sum/total
    return av
}


koder.setAverage = function () {
    //koder.average = getAverage()
    this.totalAverage = this.getAverage
}



// Agregar un metodo para calcular el IMC
koder.setGetIMC = function () {
    
}


// Agregar un metodo para Agregar un nuevo promedio
koder.setNewAve = function () {
    
}


// Agregar un metodo para agregar una nueva propiedad 
koder.addNewProperty = function () {
    
}






// koder.getAverage = function (){
//     let counter = 0
//     sumAverage = 0
//     for(let key in koder) {        
//         counter++
// 	    let sumReduce = this.average.reduce( (acc, cv) => {
//             return sumAverage += acc             
//         }, 0)
// 	    let prom = sumAverage / counter
//         return prom
//     }
//     return   
// }

//console.log(koder.getFullName())
//console.log(koder.getAverage())
//console.log(koder.setAverage())
