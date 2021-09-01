var greeting ="Hola koders!!!"
//console.log (greeting)
console.log(window.greeting) // ambito global
console.log(window.hello) // ambito global


var musica = "Rock"

console.log("variable musica antes del bloque: ", musica)
{

// esto es un bloque
/* esto es comentario
multilinea 
*/
    var musica = "Pop" // aun que este en bloque las variables siempre se subiran a ambito global hoisting (elevacion)
    console.log("Variable musica dentro del bloque: ", musica)
}


console.log("Variable musica despues del bloque: ", musica)


console.log("--------------------------------")
// es mejor usar let por que respeta flujo de bloque ya no es bueno usar var, en este se le puede reasignar variables tantas vecez quieras
let musica2 = "Rock"

console.log("variable musica antes del bloque: ", musica2)
{


    let musica2 = "Pop" 
    console.log("Variable musica dentro del bloque: ", musica2)
}


console.log("Variable musica despues del bloque: ", musica2)


//ES6 - CONST (referencia a constante) para valores que nunca cambian son inmutables en todo el codigo, se debe de inicializar siempre con un valor

const PI = 3.1416

console.log(PI)

// tipos de datos JS primitivos y compuestos
/*
compuestos: array, objetos, class
*/
/*
primitivos ejem: const URL_BASE = "http://localhost:8080"
*/

// ejem compuesto con const permite agregar atributos a tu arreglo o modificar
const objeto = {
    name: "adolfo",
    age: 35
}

const arrayColors = ['red','green']

console.log(objeto)
console.log(arrayColors)

objeto.lastName = "Del Castillo"
arrayColors.push("yellow")

console.log(objeto)
console.log(arrayColors)


console.log("-----------let-------------")
// let - rasignar el valor
//podemos solo declararla
// no puedo redeclarar la variable en su mismo scope
let koder = 1
console.log(koder)
koder = 2
console.log(koder)
//let koder -- no se puede esto

console.log("-----------const-------------")
// primitivos string, number, boolean ....
const CURP = "CAGX86"
//CURP = "rtf87"

// compuestos array, class, objetos
// permite modificarlo por que se mantiene el typo de objeto
const koder2 = {
    name: "Adolfo"
}

console.log(koder2)

koder2.lastName = "Del Castillo"

console.log(koder2)
