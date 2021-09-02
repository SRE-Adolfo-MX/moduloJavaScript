console.error("Esto es un error")

console.warn("Esto es una alerta")

// 3 metodos para interactuar con el usuario 

//alert("Esto es una alerta")
//      prompt("Ingresa tu nombre")
// esto regresa un string

// Tipos de operadores
// aritmeticos + * - % /
let operation = 5 + (10 - 5) * 3
console.log(operation)
//relacional >< >= <= == != 
console.log(8>9)
//asignacion = ( asignar valor a una variable), == (Comparacion de dato), === (Comparacion de dato y valor), +=, *=, /=, %=, -=

console.log(7 == 7)
console.log("7"==7) // esto da true por que hace comparacion de valor y no de tipo
console.log("7"===7)

let number = 1

number = number + 5

console.log(number)

number += 10

console.log(number)

//incremento | decremento

let number1 = 2

number1 = number1 ++

console.log(number1)


// logico

// EJERCICIOS
// 1. Pedir 2 numeros al usuario y mostrar en consola el resultdo de aplicar todas las operaciones aritmeticas entre esos dos numeros

console.log("-------------ejercicio1--------------")
let num1 = prompt("Ingresar primer numero")
let num2 = prompt("Ingresar segundo numero")

let total1 = parseInt(num1) * parseInt(num2)
console.log("multiplicacion: ", total1)

let total2 = parseInt(num1) + parseInt(num2)
console.log("suma: ", total2)

let total3 = parseInt(num1) - parseInt(num2)
console.log("resta: ", total3)

let total4 = parseInt(num1) / parseInt(num2)
console.log("division: ", total4)

let total5 = parseInt(num1) % parseInt(num2)
console.log("porcentaje: ", total5)

// 2. Pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo.
console.log("-------------ejercicio2--------------")
num1 = prompt("Ingresar primer numero")
num2 = prompt("Ingresar segundo numero")

let comparacion = parseInt(num1) >= parseInt(num2)

if (comparacion === true)
{
    console.log("Primer numero:", num1 ,"es mayor o igual que el segundo: ", num2)
} else {
    console.log("Primer numero:", num1 ,"es menor que el segundo: ", num2)
}

// 3. Pedir al usuario dos letras, y determinar si la primera apare antes o después en el alfabeto.
console.log("-------------ejercicio3--------------")
let letra1 = prompt("Ingresar primer letra")
let letra2 = prompt("Ingresar segundo letra")

comparacion = letra1 <= letra2

if (comparacion === true)
{
    console.log("Primer letra:", letra1 ,"aparece antes o en la misma posision que la segunda letra: ", letra2)
} else {
    console.log("Primer letra:", letra1 ,"aparece despues que la segunda letra: ", letra2)
}
