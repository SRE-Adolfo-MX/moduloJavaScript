/*
Ejercicio 1:
Deducir:

input: anaconda
output: true

input: belzeebub
output: true

input: koder
output: false

input: cerveza
output: false
*/

let palabra = prompt("Ingrese palabra")
let i = 0
while(i < 1){
    switch(palabra){
        case "anaconda":
            console.log ("true");
            i++;
            break;
        case "belzeebub":
            console.log ("true");
            i++;
            break;
        case "koder":
            console.log ("false");
            i++;
            break;
        case "cerveza":
            console.log ("false");
            i++;
            break;
        default:
            console.log ("dato invalido");
            palabra = prompt("Ingrese palabra")
    }
}


/*
    Ejercicio 2:
    Pedir al usuario usuario un numero entre 1 y 10

    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/


let numero = prompt("Ingrese un numero del 1 al 10")
i = 0
let numero1=1
numero = Number(numero);
while(i < 100){

    let operacion = numero1 * numero;
    console.log (`${numero1} x ${numero} = ${operacion}`);
    i++;
    numero1++;
}


/*
Ejercicio 3:
Pedir al usuario un numero entre 10 y 100

Imprimir todos los numeros pares que existen entre 1 y ese numero

*/

let numIngresado = prompt("Ingrese un numero del 10 al 100")
i = 1
numIngresado = Number(numIngresado);

while(i <= numIngresado){

    if (i % 2 === 0){
        console.log(`Numero ${i} es par`);
    }
    i++;
}


/*
Ejercicio 4:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10

*/



/*

/*
Ejercicio 5:
Imprimir en consola el siguiente patrón

*
**
***
****
*****
******
*******
********
*********
**********

*/

let patron="*"
i = 0
while(i < 10){

    console.log(patron)
    patron+="*"
    i++;
}


/*
    Ejercicio 6;
    Imprimir en consola la suma de los multiplos de 3 y 5 contenidos entre el 1 y 100 -> 233168
*/


let total=0;
for(i=1;i<=100;i++)
{
    if (i % 3 == 0 || i % 5 == 0) {
        total+=i;
        }      
      
}

console.log("El total de los multiplos de 3 y 5 es:", total )

/*
Ejercicio 7:
Deducir: 

input: Hola como estas
output: holaComoEstas

input: hello Koders
output: helloKoders

*/

/*
Ejercicio 8:
Desarrollar un programa que solicite 10 números e imprima la suma de lo últimos 5 valores ingresados.
*/
let totalSuma=0;

for(i=1;i<=10;i++)
{
    let pregunta=`Ingresa numero ${i}:`;
    let solicitudNumero=prompt(pregunta);
    solicitudNumero=Number(solicitudNumero);
    if (i > 5) {
        totalSuma+=solicitudNumero;
        }      
      
}

console.log("El total de los ultimos 5 numeros es:", totalSuma )