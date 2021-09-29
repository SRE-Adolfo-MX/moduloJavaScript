
   
let name="";
let lastName="";
let number = 0;

let btnIncrementar = document.getElementById("btn-reg");

btnIncrementar.addEventListener("click", () => {
    number ++;
    let table = document.getElementById("tBody");

    console.log(table)

    let kodersArray = [];
    let koders = {

    }

    name = document.getElementById("my-input").value;
    lastName = document.getElementById("my-input2").value;
    koders = {
        name,
        lastName
    }

    kodersArray.push(koders)

    const createNode = (typeElement, text) => {
        let node = document.createElement(typeElement)
        node.textContent = text
        return node
    }
    
    const printTable = () => {
        let tBody = document.getElementById("list-koders")
        kodersArray.forEach((koder) => {

            let {name, lastName} = koder

            let tr = document.createElement("tr")
            tr.classList.add(`tr_${number}`)
            let tdIndex = createNode("td", number)
            
            let tdName = createNode("td", name)
            let tdLastName = createNode("td", lastName)

            let tdButton = document.createElement("td")
    
            let button = createNode("button", "Eliminar")
            button.classList.add("btn", "btn-danger")
    
            button.addEventListener("click", ()=> {
                console.log("Eliminando... jeje")
                // Eliminar del array
                let btnDrop = document.getElementById("btn-danger");
                console.log(btnDrop)
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
    


})

