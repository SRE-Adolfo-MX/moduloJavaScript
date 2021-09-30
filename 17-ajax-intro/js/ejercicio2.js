
let kodersArray = [];
let btnDecrementar = document.getElementById("btn-restar")
let btnIncrementar = document.getElementById("btn-sumar")
let counter = document.getElementById("counter")

let number = 0

const dataRefresh = () => {
    kodersArray = []
    const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', () => {

    if (xhr.status >= 200 && xhr.status <=299){
        let keyObj = {}

        if (xhr.readyState === 4){
            array = JSON.parse(xhr.response);
            
            
            for (const [key, data] of Object.entries(array)) {
                    let id = key;
                    // console.log(data)
                    let {lastName, name} = data
                    keyObj = {
                        id,
                        name,
                        lastName
                    }
                    //console.log(keyObj)
                    kodersArray.push(keyObj)

              }
              //console.log(kodersArray)
              printTable()
        }
    } else {
        console.log(`Ocurrio un problema ${xhr.status} favor de revisar`)
    }
    
})
xhr.open("GET","https://api-13va-default-rtdb.firebaseio.com/.json", true) //true asincrono o false sincrona

xhr.send();
}

//console.log(kodersArray)

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
    console.log(positionKoder)
    //kodersArray.splice(positionKoder, 1)
    // console.log(kodersArray)
    //deleteKoder(positionKoder)
    printTable()
}
 
const createKoder = (koderObject) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr.responseText)
            }
        }
    })
    xhr.open("POST", "https://api-13va-default-rtdb.firebaseio.com/.json", true)

    xhr.send(JSON.stringify(koderObject))
    printTable()
}
/* 
const deleteKoder = (koderObject) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr.responseText)
            }
        }
    })
    xhr.open("DELETE", "https://api-13va-default-rtdb.firebaseio.com/.json", true)

    xhr.send(JSON.stringify(koderObject))
    printTable()
} */

document.getElementById("btn-agregar").addEventListener("click", (event)=> {
  let newKoder = {}
  document.querySelectorAll("form#added-koders input").forEach((input) => {
      newKoder[input.name] = input.value
  })
  createKoder(newKoder)
  printTable()
})

const printTable = () => {
    let tBody = document.getElementById("list-koders")

    while(tBody.lastElementChild) {
        tBody.removeChild(tBody.lastElementChild)
    }

    kodersArray.forEach((koder, index) => {
        //console.log(koder)
        let {id, name, lastName} = koder
        let tr = document.createElement("tr")

        let tdIndex = createNode("td", index + 1)
        let tdName = createNode("td", name)
        let tdLastName = createNode("td", lastName)
        let tdButton = document.createElement("td")

        let button = createNode("button", "Eliminar")
        button.classList.add("btn", "btn-danger")

        button.setAttribute("data-koder-index", id)

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

document.getElementById("btn-refresh").addEventListener("click", (event)=> {
    dataRefresh()
  })
  