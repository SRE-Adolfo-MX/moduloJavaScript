// switch
/*
doming - 0
lunes - 1
martes - 2
miercoles - 3
jueves - 4 
viernes - 5
sabado - 6

*/

let today = 1

switch(today) {
    case 0: 
        console.log("Domingo")
        break;
    case 1: 
        console.log("Lunes")
        break;
    case 2: 
        console.log("Martes")
        break;
    case 3: 
        console.log("Miercoles")
        break;
    case 4: 
        console.log("Jueves")
        break;
    case 5: 
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    default:
        console.log("Dia invalido")
        break;
    }

    // string
    // Dato primitivo
    let nombre = "Adolfo"
    let apellido = 'Del Castillo'
    let saludo = new String("Hola amigos")

    let nombreCompleto = nombre + " " + apellido

    console.log(nombreCompleto)

    // ES6 interpolacion de variables con cadenas (Template String)
    let nuevoSaludo = `Hola mi nombre es ${nombre}`

    console.log(nuevoSaludo)

    // primitive wrapper object

let someString = "Hola a todos"
console.log(someString.length)

// funciones

function sumaDeDosNumeros(){
    let numer1 = 45
    let numer2 = 10

    let suma = numer1 + numer2

    console.log(suma)
}
// invocar funcion
sumaDeDosNumeros()

// con variables de entrada

function sumaDeDosNumerosvar(numer1,numer2 ){

    let suma = numer1 + numer2

    console.log(suma)
}

sumaDeDosNumerosvar(10,10)


// return

function sumaDeDosNumeroReturn(numer1,numer2 ){

    let suma = numer1 + numer2

    return "Esto es el resultado del return: " + suma
}

console.log(sumaDeDosNumeroReturn(10,10))
let resultReturn = sumaDeDosNumeroReturn(10,100)
console.log(resultReturn)

function comparaNumeros(numer1,numer2 ){

    let resultado = numer1>numer2?"Numero uno es mayor que el numero dos":"Numero uno es menor que el numero dos"  

    return resultado
}

console.log(comparaNumeros(20,30))

// indices
let str = "Adolfo"
console.log(str.charAt(0))

// ejercicio
// 1 solicitar al usuario su nombre y sus apellidos regresar en una sola cadena con formato nombre en minuscular y apellidos sea mayuscula

nombre = prompt("Cuales tu nombre?")
apellido = prompt("Cual es tu apellido?")
function nameCompleto(nombre, apellido) {

    nombre = nombre.toLowerCase()
    apellido = apellido.toUpperCase()

    return "Tu nombre es: " + nombre + " " + apellido
}

console.log(nameCompleto(nombre, apellido))


// 2 Solicitar el nombre completo de un usuario e indicar el numero de caracter

let nombreCom = prompt("Cuales es tu nombre completo?")
function cantidadCaracteres(nombreCom) {

    nombre = nombreCom.length

    return "La cantidad de caracteres en tu nombre es de : " + nombre
}

console.log(cantidadCaracteres(nombreCom))

/*
Ejercicio 3:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

nombreCom = prompt("Cuales es tu nombre completo?")
function ejercicio3(nombreCom) {

    nombre = nombreCom.match(/[aeiou]/gi).length;

    return "El total de vocales que tiene tu nombre es de: " + nombre
}
console.log(ejercicio3(nombreCom))

/*
Ejercicio 4:
    Del texto: 
    "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa 
    al estudiante que tiene a su lado"

    - Contar cuántas veces se usa la palabra "estudiante" y reemplazar todas las coincidencias 
        por la palabra "Koder", 
    - y mostrar el mensaje de nuevo al usuario

*/



function ejercicio4(cadena) {
    
    let cantidad = cadena.match(/estudiante/gi).length;
    //return cantidad;
    let remplazo = cadena.replace(/estudiante/gi,'koder')+" \ "+"cantidad de palabra estudiantes remplazada: "+ cantidad;
    return remplazo;
}

let cadena = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado"
console.log(ejercicio4(cadena))


/*
Ejercicio 5:
    Comparar 2 string, y determinar cual de los dos es el más largo

    input: "string 1", "Some large string"
    Output: "el string {string 1} es el más largo"
*/


let cadena1 = prompt("Ingresa una palabra")
let cadena2 = prompt("Ingresa otra palabra")

function ejercicio5(cadena1, cadena2) {
    
    let cantidad1 = cadena1.length;
    let cantidad2 = cadena2.length;
    
    if (cadena1 > cadena2){
        let result = "Primera cadena mayor a la segunda cadena"
    } else if (cadena1 < cadena2){
        result = "Segunda cadena mayor a primera cadena"
    } else {
        result = "primera cadena es igual a la segunda cadena en longitud"
    }

    return result;
}

console.log(ejercicio5(cadena1, cadena2))


/*
Ejercicio 6:
    Dado un string de dos palabras realizar una función que devuelva la palabra más larga
    input: 'Programación Javascript'
    Output: 'Programación'
*/



cadena1 = prompt("Ingresa un string de dos palabras")

function ejercicio6(cadena1) {
    
    let cadenaTotal = cadena1.split(" ");

    if (cadenaTotal[0].length > cadenaTotal[1].length){
        result = "La palabra mas larga es la primera: "+cadenaTotal[0]
    } else if (cadena1 < cadena2){
        result = "La palabra mas larga es la segunda: "+cadenaTotal[1]
    } else {
        result = "Las dos palabras son de la misma longitud"
    }

    return result;
}

console.log(ejercicio6(cadena1))