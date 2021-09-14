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
