const personObjects = {
    name: "Adolfo",
    LastName: "Del Castillo",
    gender: "Male",
    age: "35",
    isSingle: false,
    hobbies: [
        "games",
        "IT",
        "GYM"
    ],
    socialNetwork: {
        facebook: "Adolfo Del Castillo"
    },
    saludar: function (){
        console.log("Hola");
    }
}

console.log(personObjects);

// como accedo a las propiedades de objeto

    // por medio de la notacion de punto
console.log(personObjects.name);
console.log(personObjects.socialNetwork.facebook);
    // ejecutar un metodo
personObjects.saludar();

    // por medio de notacion corchetes
console.log(personObjects["hobbies"]);

// agregar una propiedad
personObjects.birthdate = "1986/04/14";

personObjects.hobbies.push("verSeries")

personObjects.socialNetwork.linkdln = "adolfo del castillo"

console.log(personObjects);

//modificar valor

personObjects.name = personObjects.name.toUpperCase();

console.log(personObjects.name);

// mandar mensaje concatenado

console.log(`Hola mi nombre es: ${personObjects.name} ${personObjects.LastName} y tengo la edad de ${personObjects.age}`);

// destructuring assigment

    // dentro de las llaves que propiedades quiero obtener 
let {name, LastName, age} = personObjects;

console.log(`Hola mi nombre es: ${name} ${LastName} y tengo la edad de ${age}`);

// crear

let firstname = "Adolfo"
let generation = 13
let bootcamp = "JS"

const koderObject = {
    firstname,
    generation,
    bootcamp
}

console.log(koderObject);

// ejercicios

let dataArray = [
    ["Fernanda","Palacios"],
    ["Alfred","Altamirano"],
    ["Angel","Resendiz"],
    ["Elda","Corona"],
    ["Tux","Tuxtla"],
    ["Jorge","De Buen"]
]

/*
arrayMentor = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    },
    ...,
    {...}
]

*/

const arrayMentor = [];

console.log("**********EJERCICIO*************")

const ejercicio1 = (dataArray) => {
    for(let i=0;i<dataArray.length;i++){
        let nameComplete = dataArray[i];
        name = nameComplete[0];
        LastName = nameComplete[1];
        const arrayMentor1 = {
            name,
            LastName
        }
        
        arrayMentor.push(arrayMentor1);
    }
    console.log(arrayMentor);
}


console.log(ejercicio1(dataArray));

dataArray = [
    "Fernanda",
    "Alfred",
    "Angel",
    "Elda",
    "Tux",
    "Jorge"
]

dataArray.forEach((name, index) => {
    console.log(`el nombre es: ${name} en la posicion ${index}`)
})

let arrayMen = [
    {
        name: "Fernanda",
        lastName: "Palacios"
    },
    {
        name: "Alfred",
        lastName: "Altamirano"
    }
]

arrayMen.forEach((profesor, index) =>{
    console.log(profesor.name);
})