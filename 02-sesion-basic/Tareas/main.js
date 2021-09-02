// 7. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
//- Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola
let name = prompt("Ingresa tu nombre")
let peso = prompt("Ingresa tu peso actual en KG")


if (!name){
    console.log("No se ingreso el nombre")
} else if (!peso) {
    console.log("No se ingreso peso")
} else {
    console.log("Tu peso en la luna es: ", (parseInt(peso) / 9.8) * 1.622, " ", name )
    console.log("Tu peso en la jupiter es: ", (parseInt(peso) / 9.81) * 24.79, " ", name )
    console.log("Tu peso en la marte es: ", (parseInt(peso) / 9.81) * 3.711, " ", name )
    
}

