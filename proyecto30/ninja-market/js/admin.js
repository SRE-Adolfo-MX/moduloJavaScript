


let btnAdd = document.querySelector("#btn-added")
let btnEdit = document.querySelector("#btn-edit")
let ProductsArray = []

// Funciones AJAX

const createProduct = (productObject) => {
    const xhr = new XMLHttpRequest()

    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
    })

    xhr.open("POST", "https://frikitest-14eb5-default-rtdb.firebaseio.com/Products.json")
    xhr.send(JSON.stringify(productObject))
}

const productTest = {
    description: "Github en version funko...",
    price: "1234",
    stock: "500"
}

const updateProduct = (idProduct, newDataToUpdate) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
    })
    xhr.open("PATCH", `https://frikitest-14eb5-default-rtdb.firebaseio.com/Products/${idProduct}.json`)
    xhr.send(JSON.stringify(newDataToUpdate))
}


const getDataForm = () => {
    let fields = document.querySelectorAll(".form input:not(input[type='checkbox']), .form textarea")
    let checkboxs = document.querySelectorAll(".form input[type='checkbox']")

    let product = {}
    let quantityFieldEmpty = 0

    fields.forEach(field => {
        if(!field.value) {
            quantityFieldEmpty++
        }else {
            product = {...product, [field.name]: field.value}
            field.value = ""
        }
    })

    let sizes = []
    checkboxs.forEach(checkbox => {
        if(checkbox.checked) sizes = [...sizes, checkbox.value]
    })

    if(sizes.length === 0) quantityFieldEmpty++

    product = {...product, sizes}

    // if(product.name && product.)

    return !quantityFieldEmpty > 0  ? product : null
}

btnAdd.addEventListener("click", () => {
   let product =  getDataForm()
   //console.log(product)
   if(product){
    // agregarlo a la BD
    createProduct(product)
   }else {
       alert("Compos Obligatorios")
   }

})

//DELETE

const deleteKoder = (koderObject) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr.responseText)
                //dataRefresh()
            }
        }
    })

    xhr.open("DELETE", `https://frikitest-14eb5-default-rtdb.firebaseio.com/Products/${koderObject}.json`, true)

    xhr.send()
    //printTable()
}

const removeKoder = (event) => {

    let positionKoder = event.target.dataset.koderIndex
    console.log(positionKoder)

    deleteKoder(positionKoder)

}


/// GET

const createNode = (typeElement, text) => {
    let node = document.createElement(typeElement)
    node.textContent = text
    return node
}

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
                    //console.log(data)
                    let {image,name,price,sizes,stock} = data
                    //console.log(name)
                    keyObj = {
                        image,
                        id,
                        name,
                        price,
                        sizes,
                        stock
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
xhr.open("GET","https://frikitest-14eb5-default-rtdb.firebaseio.com/Products.json", true) //true asincrono o false sincrona

xhr.send();
}

dataRefresh()

const printTable = () => {
    let tBody = document.getElementById("list-products")

    while(tBody.lastElementChild) {
        tBody.removeChild(tBody.lastElementChild)
    }

    kodersArray.forEach((product, index) => {
        let {image, id, name, price, sizes, stock} = product;

        let tr = document.createElement("tr")
        let tdImage = document.createElement("td");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdSize = document.createElement("td");
        let tdStock = document.createElement("td");
        let tdButton = document.createElement("td")
        let button = createNode("button", "Editar")
        let button2 = createNode("button", "Eliminar")
        
        button.classList.add("btn", "btn-primary")
        button.setAttribute("data-koder-index",id)
        button2.classList.add("btn", "btn-danger")
        button2.setAttribute("data-koder-index",id)

      //  button.addEventListener("click","2")
      button2.addEventListener("click", removeKoder)

        tdName.textContent = name
        tdImage.textContent = null
        tdId.textContent = index + 1
        tdPrice.textContent = `$ ${price}`
        tdSize.textContent = sizes
        tdStock.textContent = stock
        tr.appendChild(tdImage)
        tr.appendChild(tdId)
        tr.appendChild(tdName)
        tr.appendChild(tdPrice)
        tr.appendChild(tdSize)
        //tr.appendChild(tdStock)
        tdButton.appendChild(button)
        tdButton.appendChild(button2)
        //tdButton.classList.add("d-flex", "justify-content-center")
        tr.appendChild(tdButton)
        tBody.appendChild(tr)
        })
}



