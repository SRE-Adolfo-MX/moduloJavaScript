let arrayKoders = [
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo"
];


/* funciones flecha en variables */

const printKoder = arrayKoders => {
    console.log(arrayKoders);
}

console.log(printKoder(arrayKoders));


/* Retorno implicito */

const multiplicacion = (a,b) => a*b;

console.log(multiplicacion(10,10));