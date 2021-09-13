/*
1. Dado un string de palabras, devolver la palabra más larga.
*/
console.log("****************EJERCICIO1******************");

let stringPalabra = prompt("Ingresa un string de palabras");

let palabraMasLarga = (stringPalabra) => {
    stringPalabra = stringPalabra.split(' ');
    let numeros = [];
    let numero = 0;
    let palabra = " ";
    let numeroString=0;
    for(i=0;i<stringPalabra.length;i++){
        numeros.push(stringPalabra[i].length);
        numeroString=Number(numeros[i]);
        if(numero <= numeroString){
            numero = numeroString;
            palabra = stringPalabra[i];
        }
    }
    console.log(`La palabra ${palabra} con el numero ${numero} es la palabra mas grande`);
}

console.log(palabraMasLarga(stringPalabra));


/*
2. Crear un programa que permita detectar si una frase finaliza con punto.
*/
console.log("****************EJERCICIO2******************");

let stringPalabra2 = prompt("Ingresa un string de palabras");

let palabraFinPunto = (stringPalabra2) => {
    let salida = stringPalabra2.endsWith('.');
    if  (salida === true){
        console.log("La palabra ingresada termina con punto");
    }else{
        console.log("La palabra ingresada no termina con punto");
    }
}

console.log(palabraFinPunto(stringPalabra2));

/*
3. Crear un programa que permita al usuario retornar el numero de coincideas de una palabra en una frase que el mismo usuario introduzca
*/

console.log("****************EJERCICIO3******************");


let string3 = prompt("Ingresa un string de palabras");

const palabraRepetida = (string3) => {
    let palabraArray = string3.split(' ');
    let palabra = " ";
    let matches = " ";
    for(i=0;i<palabraArray.length;i++){
        palabra=palabraArray[i]
        let regex = new RegExp(palabra, "gi");
        matches = string3.match(regex).length;    
    }
    console.log(`La palabra: ${palabra} se repite ${matches}`)
}

console.log(palabraRepetida(string3));

/*
4. Crear un programa que permita al usuario extraer uns subcadena de una cadena dada.
*/

console.log("************EJERCICIO4********************");

const extraSubcadena = (cadena, numIncial, numFinal) => {
    console.log(cadena.substr(Number(numIncial),Number(numFinal)));
}

let cadena = prompt("Introduce una cadena de palabras");
let numIncial = prompt("Desde que numero de caracter quieres mostrar?");
let numFinal = prompt("Hasta que numero de caracter quieres mostrar?")

console.log(extraSubcadena(cadena,numIncial,numFinal));

/*
5. Crear un programa que permita comparar dos palabras dadas por el usuario y determine si son iguales o no.
*/

console.log("****************EJERCICIO5********************")

const compareStrings = (string1, string2) => {
    string1 = string1.toLowerCase();
    string2 = string2.toLowerCase();

    if (string1 === string2){
        console.log(`Las palabras ${string1} y ${string2} son iguales`);
    }else{
        console.log(`Las palabras ${string1} y ${string2} no son iguales`);
    }
}

let string1 = prompt("Ingresa una palabra");
let string2 = prompt("Ingresa otra palabra");

console.log(compareStrings(string1,string2));

/*
6. Crear un programa que permita a una cadena de texto muestra el caracter '-' ebtre cada caracter de la cadena.
*/

console.log("****************EJERCICIO6********************")

const caractString = (string1) => {
    let stringComplete="";
    let caractNumber =(Number(string1.length)-1);
    let simbol;
    for(i=0;i<string1.length;i++){
        if (i === caractNumber){
            simbol=" "
            stringComplete+=string1.charAt(i).concat(simbol);
        }else{
            simbol="-"
            stringComplete+=string1.charAt(i).concat(simbol);
        }
        
        
    }
    console.log(stringComplete);
}

let string1 = prompt("Introduce una palabra");

console.log(caractString(string1));

/*
7. Sabiendo que una cadena de texto contiene parentesis. Crear un programa qye me devuelva la cadena que se encuetra entre los parentesis.
*/

const stringParentezis = (string1) => {

    string1 = string1.replace("(","");
    string1 = string1.replace(")","");
    console.log(string1);
}

let string1 = prompt("Ingrese una palabra entre parentezis");

console.log(stringParentezis(string1));


/*
8. Realizar un programa que muestre una piramide del 1 al 10 de las siguiente formas:
*/

 const piramideUp = () =>{
    let piramide= "" 
  
    for( let i = 0; i <= 10 ; i++){
       piramide += agregarNumeros(i-1)
    }
    return piramide
  }

  const piramideDown = () => {
    let piramide= "" // el string
  
    for( let i = 10; i > 0 ; i--){
       //piramide += agregarEspacios(num_lineas,suma,i) 
       piramide += agregarNumeros(i-1)
    }
    return piramide
  }

  const agregarNumeros = (index) => {
    let piramide = (index + " ").repeat(index+1)
    return piramide += "\n" 

}


console.log(piramideUp())
console.log(piramideDown())


/*
10. Solicitar al usuario un nombre por medio del promt e ingresarlo a una coleccion , validando que no se repita ningun nombre.
*/

const newName = (idresp) => {
    let names=[];
    for(i=0;i<idresp;i++){
        let name = prompt("Ingresa un nombre");
        if (names.indexOf(name) === -1) {
            names.push(name);
            console.log('Se a agregado tu nombre a la coleccion de usuarios: ' + name);
        } else if (names.indexOf(name) > -1) {
            console.log(name + ' ya existe en la colección de nombres.');   
        }
                     
    }
    console.log(`Los nombres registrados son ${names}`)
}

let idresp = prompt("Cuantos nombres quieres registrar?")
console.log(newName(idresp));

/*
11. Dado una coleccion de numeros. obtener el elemento Mayor, Menor, el Promedio y la Suma de los elementos.
*/

/*
12. Solicitar al usuario por medio de un promt una cadena de numeros separados por algun caracter y que cada numero se agregue a una collecion de numeros.
*/

/*
13. Dado un array de números, detarminar por cada elemento si es un multiplo de 4, 3, 5, 2.
*/

/*
14. Crear un programa que dado un array de strings, un número, y debe de imprimir cada uno de los items del array con los caracteres limitados al número ingresado.
*/

/*
15. Crear un programa que dados los datos de 3 lados de un triangulo con base en esos datos, determinar el área del triangulo y mostrarla en un mensaje en otro mensaje, indicar si el triangulo es isoseles, equilátero o escaleno.
*/

/*
16. Crear un programa que genere un string con "n" caracteres aleatorios, con la unica condicion de que no haya caracteres repetidos en el string.
*/
