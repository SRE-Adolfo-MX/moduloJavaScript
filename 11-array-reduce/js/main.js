let numbersArrays = [20,15,2,5];

let suma = numbersArrays.reduce((accum, number)=>{
    return accum += number;
},0)

console.log(suma)

const arrayFruits = [
    "banana",
    "fresa",
    "chicozapote", 
    "naranja", 
    "banana",
    "pera",
    "pera",
    "naranja"
]
// spread operator
const copyArrayFruit = {...arrayFruits, licuado: "banana"}

console.log(copyArrayFruit);

const result = arrayFruits.reduce((accum, fruit, index)=>{
    let count = accum[fruit] ? accum[fruit] + 1 : 1
    console.log(count)
    return {
        ...accum,
        [fruit]: count
    }
},{})