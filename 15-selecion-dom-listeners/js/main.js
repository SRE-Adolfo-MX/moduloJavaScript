// Por tagname

let listItem = document.getElementsByTagName("li")
console.log(listItem)
// Por class

let byClass = document.getElementsByClassName("koder-item")
console.log(byClass)
// getElementById(id)

let ulById = document.getElementById("koders-list")
console.log(ulById)

//

// 

let li = document.querySelector("ul#koders-list li.koder-item")
console.log(li)

let lis = document.querySelectorAll("ul#koders-list li.koder-item")
console.log(lis)

lis.forEach(element => {
    console.log(element)
    element.classList.add("list-group-item")
    let text = element.textContent
    text.length > 4
     ? element.classList.add("bg-success")
     : element.classList.add("bg-danger", "text-white")
})


let notesArray = [
    {
        name: "Español",
        score: 9
    },
    {
        name: "Matemáticas",
        score: 9
    },
    {
        name: "Historia",
        score: 8
    },
    {
        name: "Geografia",
        score: 7
    }
]

const addItem = () => {
    let ul = document.getElementById("signature-list")

    notesArray.forEach(({name, score}) => {
        let li = document.createElement("li")
        let textNode = document.createTextNode(`${name}: ${score}`)
        li.appendChild(textNode)
        li.classList.add("list-group-item")

        score >= 9 
            ? li.classList.add("bg-primary")
            : li.classList.add("bg-warning")
        ul.appendChild(li)
    })
}

addItem()


// element.addEventListener([evento], callback)

let button = document.getElementById("my-button")

const getLowerSignature = () => { 
    let scores = document.getElementsByClassName("bg-warning")
    console.log(scores.length)
    // console.log("Haz dado click yei!!!")
}

button.addEventListener("click", getLowerSignature)


// 

let myInput = document.getElementById("my-input")

myInput.addEventListener("keydown", () => {
    console.log("Escribiendo...")
    let valueInput = myInput.value

    document.getElementById("mi-heading").textContent = valueInput
})

let buttons = document.querySelectorAll(".test-btn")

buttons.forEach(button => {
    button.addEventListener("click",(evento)=> {
        console.log(button.textContent)
        console.log(evento)
        console.log(evento.target)
        console.log(evento.target.dataset.customKey)
    })
})