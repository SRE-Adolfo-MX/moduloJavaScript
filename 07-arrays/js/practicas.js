let arrayKoders = [
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo",
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo",
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo",
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo",
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo",
    "Paco",
    "Clau",
    "Fanny",
    "Nancy",
    "Pablo"
];

/*
Ejercicio
- Funcion que me regrese un numero aleatorio desde 0 hasta array.length

- Funcion que reciba el indice para imprimir el nombre
*/

let numAleatorio = arrayKoders => {
    let numeroA = arrayKoders.length;
    let numero = 0;
    numero = Math.floor(Math.random() * numeroA);

    for(let i = 0;i<=numeroA;i++){
        if ( numero <= numeroA){
            console.log(`Entro funcion ${numero}`);
            return numero
        }else{
            console.log(`Termino funcion ${numero}`);
        }
    }
}

console.log(numAleatorio(arrayKoders));

let indiceKoder = (arrayKoders, indice) => {
    console.log(`El koder encontrado con el indice ${indice} es: ${arrayKoders[indice]}`)
}

console.log(indiceKoder(arrayKoders,numAleatorio(arrayKoders)));

