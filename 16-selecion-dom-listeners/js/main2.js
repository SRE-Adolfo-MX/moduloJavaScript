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

// let buttons = document.querySelectorAll(".btn-test")
// console.log(buttons)

// buttons.forEach((btn) => {
//     btn.addEventListener("click", (event)=> {
//         console.log("clicked..")
//         console.log(event)
//         console.log(event.target) // elemento - button
//         console.log(event.target.id)
//         let id = event.target.id
//         id === "btn-restar"
//             ? number--
//             : number++
//         counter.textContent = number
//     })
// })

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



document.getElementById("btn-agregar").addEventListener("click", (event)=> {
//   event.preventDefault()
  let newKoder = {}
  document.querySelectorAll("form#added-koders input").forEach((input) => {
    //   console.log(input.name, input.value)
      newKoder[input.name] = input.value
    //   console.log(newKoder)
  })
  kodersArray.push(newKoder)
  console.log(kodersArray)
  printTable()
})


const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    // let textNode = document.createTextNode(text)
    // node.appendChild(textNode)
    return node
}

const removeKoder = (event) => {
    // console.log("Eliminando... jeje")
    // Eliminar del array
    let positionKoder = event.target.dataset.koderIndex
    kodersArray.splice(positionKoder, 1)
    // console.log(kodersArray)
    printTable()
}

const printTable = () => {
    let tBody = document.getElementById("list-koders")

    // tBody.innerHTML = ""

    // 
    // console.log(tBody.children)

    // mientras tBody tanga elementos va a eliminar el ultimo hijo
    while(tBody.lastElementChild) {
        tBody.removeChild(tBody.lastElementChild)
    }

    kodersArray.forEach((koder, index) => {
        let {name, lastName} = koder
        let tr = document.createElement("tr")

        let tdIndex = createNode("td", index + 1)
        let tdName = createNode("td", name)
        let tdLastName = createNode("td", lastName)
        let tdButton = document.createElement("td")

        let button = createNode("button", "Eliminar")
        button.classList.add("btn", "btn-danger")

        button.setAttribute("data-koder-index", index)

        button.addEventListener("click", removeKoder)

        tdButton.appendChild(button)

        tr.appendChild(tdIndex)
        tr.appendChild(tdName)
        tr.appendChild(tdLastName)
        tr.appendChild(tdButton)

        tBody.appendChild(tr)
    })
}

printTable()
