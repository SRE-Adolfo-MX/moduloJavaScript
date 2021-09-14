let mentorArray = [
    {
        name: "Angel Resendiz",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 9
            },
        ]
    },
    {
        name: "Elda Corona",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Alfred Altamirando",
        scores: [
            {
                signature:  "HTML",
                score: 9
            },
            {
                signature:  "CSS",
                score: 10
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Tux Tuxtla",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 8
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    },
    {
        name: "Fernanda Palacios",
        scores: [
            {
                signature:  "HTML",
                score: 10
            },
            {
                signature:  "CSS",
                score: 9
            },
            {
                signature:  "JS",
                score: 10
            },
        ]
    }
]


/*
- Obtener el score promedio de cada materia (HTML, CSS, JS)

- Obtener el promedio indivual de cada mentor

- Crear un array de string con la siguiente forma:
  "Mi nombre es {name} y mi promedio es {promedio}"

- Obtener la lista de mentores cuyo promedio sea mayor a 9.5

*/
let promedioFinal;
let promedioHTML;
let promedioCSS;
let promedioJS;
let Name;
let promedio;
let promedioAlto = [];
promedioFinal=0;
promedioHTML=0;
promedioCSS=0;
promedioJS=0;
promedio=0;
Name="";
mentorArray.forEach((name, index) => {
    promedioHTML+=((name.scores[0].score));   
    promedioCSS+=((name.scores[1].score));
    promedioJS+=((name.scores[2].score));
    promedioFinal+=((name.scores[0].score + name.scores[1].score + name.scores[2].score)/3);
    promedio=((name.scores[0].score + name.scores[1].score + name.scores[2].score)/3);
    Name=name.name;
    console.log(`Mi nombre es ${Name} y mi promedio es ${promedio}`)
    console.log(`el mentor: ${name.name} tiene el promedio de: ${(name.scores[0].score + name.scores[1].score + name.scores[2].score)/3}`)
    if(promedio > 9.5){
        promedioAlto.push(`El mentor con promedio alto es ${Name} y mi promedio es ${promedio}`);
    }
})
console.log(`El promedio final es: ${promedioFinal/5}`)
console.log(`El promedio final de HTML es: ${promedioHTML/5}`)
console.log(`El promedio final de CSS es: ${promedioCSS/5}`)
console.log(`El promedio final de JS es: ${promedioJS/5}`)
console.log(promedioAlto);


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

console.log("************EJERCICIO2****************")

let name;
let LastName;
let arrayMentor = [];
dataArray.forEach((mentor,index) => {
    name = mentor[0];
    LastName = mentor[1];
    const arrayMentor1 = {
        name,
        LastName
    }
    arrayMentor.push(arrayMentor1);
})

console.log(arrayMentor);