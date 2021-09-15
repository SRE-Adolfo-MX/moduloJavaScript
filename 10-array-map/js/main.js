console.log("*************MAP***************");

let numbersArray = [
    2,
    6,
    7,
    10,
    5
]

let doobleNumbers = numbersArray.map((number, index) =>{
    return number * 2;
})

console.log(doobleNumbers);


let doobleNumbers2 = numbersArray.map((number, index) => `${number * 2}`)

console.log(doobleNumbers2);

console.log("*************FILTER***************");


let parsNumbers = numbersArray.filter((number, index) =>{
    if(number % 2 === 0){
        return `El numero: ${number} es par`
    }
})

console.log(parsNumbers);

let parsNumbers2 = numbersArray.filter((number) => number % 2 === 0)

console.log(parsNumbers2)