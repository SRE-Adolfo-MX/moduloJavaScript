let arrayKoders = [
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo"
];

/*Hola mi nombre es ${nombre}*/ 

for (let i=1; i < arrayKoders.length; i++ ){
    console.log(`Hola mi nombre es ${arrayKoders[i]}`);
}

/* Metodos de arrays*/

/*
.push() Agrega uno o mas items al final del array
*/

arrayKoders.push("Emi","Pao","Mike");

console.log(arrayKoders);

/*
.pop Elimina o remueve el ultimo elemento en el array
devuelve el item removido
*/

arrayKoders.pop();

console.log(arrayKoders);

/*
.reverse Invierte el arreglo
*/

console.log(arrayKoders.reverse());

/*
.shift Remueve el primer item del array
Y muestra el item removido
*/

arrayKoders.shift();

console.log(arrayKoders);

/*
.unshift Agrega el primer item del array
Y devuelve la cantidad de la longitud del nuevo arreglo
*/

arrayKoders.unshift("Jorge");

console.log(arrayKoders);

/*
.concat() concatena uno o mas arrays
*/

let arrayKoders10ma = ["Cintia","JuanPi","Vero"]

let arrayAllKoders = arrayKoders.concat(arrayKoders10ma);

console.log(arrayAllKoders);


/*
.splice remueve o remplaza elementos en un array y en este se puede eliminar en el orden que quieras
ejem: splice(index, howmany, items ...., itemN)
*/

arrayKoders.splice(2,2);

console.log(arrayKoders);

arrayKoders.splice(2,1, "Pablo","Nancy"); /* Eliminar a fanny y agregar pablo y nancy */

console.log(arrayKoders);

arrayKoders.splice(1,0, "Jose"); /* Agregar sin eliminar Jose en el lugar de Emi*/

console.log(arrayKoders);

