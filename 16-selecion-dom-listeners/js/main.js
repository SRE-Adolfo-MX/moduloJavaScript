let btnDecrementar = document.getElementById("btn-restar")
let btnIncrementar = document.getElementById("btn-sumar")
let counter = document.getElementById("counter")

let number = 0


// btnDecrementar.addEventListener("click", () => {
//     console.log("click decrementar")
//     // number -= 1
//     number--
//     console.log(number)
//     counter.textContent = number
// })

// btnIncrementar.addEventListener("click", ()=> {
//     number++
//     console.log(number)
//     counter.textContent = number
// })

let buttons = document.querySelectorAll(".btn-test")
console.log(buttons)

buttons.forEach((btn) => {
    btn.addEventListener("click", (event)=> {
        console.log("clicked..")
        console.log(event)
        console.log(event.target) // elemento - button
        console.log(event.target.id)
        let id = event.target.id
        id === "btn-restar"
            ? number--
            : number++
        counter.textContent = number
        return number
    })
})

const num = function numbers (number) {
    console.log(number)
    console.log("Hello")
} 

console.log(num(number))


let kodersArray = [
    {
        name: "Emi",
        lastName:  "de León"
    },
    {
        name: "Clau", 
        lastName: "Rodriguez"
    },
    {
        name: "Fanny", 
        lastName: "Alvarez"
    }
]

const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    // let textNode = document.createTextNode(text)
    // node.appendChild(textNode)
    return node
}

const printTable = () => {
    let tBody = document.getElementById("list-koders")
    kodersArray.forEach((koder, index) => {
        let {name, lastName} = koder
        let tr = document.createElement("tr")

        let tdIndex = createNode("td", index + 1)
        let tdName = createNode("td", name)
        let tdLastName = createNode("td", lastName)
        let tdButton = document.createElement("td")

        let button = createNode("button", "Eliminar")
        button.classList.add("btn", "btn-danger")

        button.addEventListener("click", ()=> {
            console.log("Eliminando... jeje")
            // Eliminar del array
        })

        tdButton.appendChild(button)

        tr.appendChild(tdIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdButton)

        tBody.appendChild(tr)
    })
}

printTable()
