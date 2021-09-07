let str = "kodemia"
let lengthStr = str.length
let result=""
let index = 0

while (index < lengthStr){

    if (index % 2 === 0){
        result+=str.charAt(index).toUpperCase();
    }else {
        result+=str.charAt(index).toLowerCase();
    }
    index++
}
console.log(result)


result=""

for (index=0; index<lengthStr;index++){
    if (index % 2 === 0){
        result+=str.charAt(index).toUpperCase();
    }else {
        result+=str.charAt(index).toLowerCase();
    }

  
}

console.log(result)


