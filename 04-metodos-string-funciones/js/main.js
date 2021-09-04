/*
    Crear una funcion que permita al usuario retornar el numero de coincidencias de 
    una palabra en una frase que el mismo usuario ingrese.
    input:
    palabra a buscar: 'Hola'
    frase: 'Hola me llamo Fernanda Palacios. Hola Otra vez'
    
    OutPut: 'El número de coincidenciad de ${palabra a buscar} es de 2 veces :D'
*/


let frase = prompt("Ingresa la frase")

let palabra = prompt("Ingresa palabra a buscar")


function ejercicio7(frase, palabra) {
    
    let variablepalabra = new RegExp(palabra, "g");
    let cantidad = frase.match(variablepalabra).length;
    //return cantidad;
    let resultado = "la palabra: "+ palabra +" aparece: "+ cantidad;
    return resultado;
}

console.log(ejercicio7(frase,palabra))

/*
    Crear una funcion o funciones que permitan elegir al usuario
    una operacion basica, indicar dos valores y ejecutar la operacion 
    seleccionada. imprimir el resultado
    output: "La ${operacion} de los dos numeros que indicaste es: ${resultado}"
    "suma", 20,10 -> La suma de 20 y 10 es 30
*/

let numero1 = prompt("Ingresa un numero")

let numero2 = prompt("Ingresa otro numero")

let operacion = prompt("Ingresa que operacion quieres hacer (suma, resta, multiplicacion o division)")

function ejercicio8(numero1,numero2,operacion) {
    
    let number1 = Number(numero1)
    let number2 = Number(numero2)

    if (operacion === 'suma'){
        let suma = number1 + number2
        return "El resultado de la suma es: "+  suma 
    }else if (operacion === 'resta'){
        let resta = number1 - number2
        return "El resultado de la resta es: "+  resta 
    }else if (operacion === 'multiplicacion'){
        let multiplicacion = number1 * number2
        return "El resultado de la multiplicacion es: "+  multiplicacion 
    }else if (operacion === 'division'){
        let division = number1 / number2
        return "El resultado de la division es: "+  division 
    }else{
        return "La opcion de operacion no es valida"
    }

}

console.log(ejercicio8(numero1,numero2,operacion))



numero1 = prompt("Ingresa un numero")

numero2 = prompt("Ingresa otro numero")

operacion = prompt("Ingresa que operacion quieres hacer (suma, resta, multiplicacion o division)")

function ejercicio8_1(numero1,numero2,operacion) {
    
    let number1 = Number(numero1)
    let number2 = Number(numero2)
    let resultado

    switch(operacion){
        case "suma":
            resultado = number1 + number2;
            break;
        case "resta":
            resultado = number1 - number2;
            break;
        case "multiplicacion":
            resultado = number1 * number2;
            break;
        case "division":
            resultado = number1 / number2;
            break;
        default:
            alert("Opcion no valida")
            break;
        
    }
    return `El resultado de la operacion "${operacion}" de los numeros es: ${resultado}`

}

console.log(ejercicio8_1(numero1,numero2,operacion))
