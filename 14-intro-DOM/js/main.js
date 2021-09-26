let h1 = document.createElement("h1");
let text = document.createTextNode("Hola Mundo");
// Elemento valido que le puedes agregar un dato.
h1.appendChild(text)
console.log(h1);

document.body.appendChild(h1)


let namesArray = [
    "Elias",
    "Nan",
    "Pao",
    "Adolfo"
];

let ul = document.createElement("ul")

namesArray.forEach(name => {
    let li = document.createElement("li")
    let text = document.createTextNode(name)
    li.appendChild(text)
    ul.appendChild(li)
    
})

document.body.appendChild(ul)