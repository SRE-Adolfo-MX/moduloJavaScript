let arrayPersons = [
    {
        name: "Alice", age: 25, voted: true, gender: "mujer"
    },
    {
        name: "Jenifer", age: 26, voted: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, voted: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, voted: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, voted: false, gender: "hombre"
    },
    {
        name: "Luis", age: 38, voted: true, gender: "hombre"
    },
    {
        name: "David", age: 29, voted: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, voted: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, voted: false, gender: "mujer"
    },
    {
        name: "Albert", age: 45, voted: true, gender: "hombre"
    },
    {
        name: "Mike", age: 22, voted: false, gender: "hombre"
    },
    {
        name: "Tami", age: 35, voted: true, gender: "hombre"
    },
    {
        name: "Mari", age: 28, voted: true, gender: "mujer"
    },
    {
        name: "Mireya", age: 18, voted: true, gender: "mujer"
    },
    {
        name: "Tamara", age: 18, voted: true, gender: "mujer"
    },
]

/*
Usar reduce para obtener la siguiente informacion
- Un array con aquellas personas que votaron
- la edad promedio de todos los votantes
- un array con aquellos votantes que votaron y que son menores a 30 años
- la edad promedio de los no votantes
- el porcentaje de votantes vs no votante

- el procentaje de mujeres que votaron
- el porcentaje de los hombres que votaron
*/


console.log("*******Un array con aquellas personas que votaron***********")

 const votedTrue = arraySongs => {
    let persons = arrayPersons.reduce((accum, name) =>{
    return name.voted
        ? [...accum, name]
        : accum
        
    },[])
    return persons
}

console.log(votedTrue(arrayPersons))

console.log("**********la edad promedio de todos los votantes**********")

const agePromed = () => {
    let dataArray = votedTrue(arrayPersons); 
    let number = dataArray.length    
    let age = dataArray.reduce((accum, name, index)=>{
        accum += Number(name.age);
        return accum
    },0)
    return `Edad promedio de los votantes ${Math.round(age/number)}`;
}

console.log(agePromed())

console.log("***********un array con aquellos votantes que votaron y que son menores a 30 años**********")

const votedTrue30 = arraySongs => {
    let persons = arrayPersons.reduce((accum, name) =>{
    return name.voted && name.age < 30
        ? [...accum, name]
        : accum
        
    },[])
    return persons
}

console.log(votedTrue30(arrayPersons))

console.log("***********la edad promedio de los no votantes**********")

const votedFalse = arraySongs => {
    let persons = arrayPersons.reduce((accum, name) =>{
    return !name.voted
        ? [...accum, name]
        : accum
        
    },[])
    return persons
}

const agePromedVotedFalse = () => {
    let dataArray = votedFalse(arrayPersons); 
    let number = dataArray.length    
    let age = dataArray.reduce((accum, name, index)=>{
        accum += Number(name.age);
        return accum
    },0)
    return `Edad promedio de los no votantes ${Math.round(age/number)}`;
}

console.log(agePromedVotedFalse())

console.log("***********el porcentaje de votantes vs no votante**********")

const porcentVoted = () => {
    let totalPersons = arrayPersons.length;
    let dataArrayTrue = votedTrue(arrayPersons);
    let dataArrayFalse = votedFalse(arrayPersons);
    let totalVotedTrue = dataArrayTrue.length;
    let totalVotedFalse = dataArrayFalse.length;
    let porcentTrue = (totalVotedTrue/totalPersons*10);
    let porcentFalse = (totalVotedFalse/totalPersons*10);
    return `El total de porcentaje de las personas que votaron es: ${porcentTrue}% y de las que no votaron es: ${porcentFalse}%`;
}

console.log(porcentVoted())

console.log("***********el procentaje de mujeres que votaron**********")

const votedTrueWomen = arraySongs => {
    let persons = arrayPersons.reduce((accum, name) =>{
    return name.voted && name.gender === "mujer" 
        ? [...accum, name]
        : accum
        
    },[])
    return persons
}

const porcentVotedWomen = () => {
    let totalPersons = arrayPersons.length;
    let dataArrayTrueWomen = votedTrueWomen(arrayPersons);
    let totalVotedTrueWomen = dataArrayTrueWomen.length;
    let porcentTrue = (totalVotedTrueWomen/totalPersons*10);
    return `El total de porcentaje de las mujer que votaron es: ${Math.round(porcentTrue)}%`;
}

console.log(porcentVotedWomen())



console.log("***********el porcentaje de los hombres que votaron**********")

const votedTrueMen = arraySongs => {
    let persons = arrayPersons.reduce((accum, name) =>{
    return name.voted && name.gender === "hombre" 
        ? [...accum, name]
        : accum
        
    },[])
    return persons
}

const porcentVotedMen = () => {
    let totalPersons = arrayPersons.length;
    let dataArrayTrueMen = votedTrueMen(arrayPersons);
    let totalVotedTrueMen = dataArrayTrueMen.length;
    let porcentTrue = (totalVotedTrueMen/totalPersons*10);
    return `El total de porcentaje de los hombres que votaron es: ${Math.round(porcentTrue)}%`;
}

console.log(porcentVotedMen())
