
document.getElementById("btn-agregar").addEventListener("click", (event)=> {
    let newProduct = {}
    let newCheck = {}
    document.querySelectorAll("input").forEach((input) => {
        newProduct[input.placeholder] = input.value
    });

    document.querySelectorAll(".form-check").forEach((input2) => {
      console.log(input2)
      if(input2.checked) {
        console.log('El elemento está marcado');
      }
  });

  console.log(newCheck)
  console.log(newProduct)

    createProduct(newProduct)
    //printTable()
  })

  const createProduct = (ProductObject) => {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("readystatechange", () => {
        if(xhr.readyState === 4) {
            if(xhr.status === 200) {
                console.log(xhr.responseText)
            }
        }
    })
    xhr.open("POST", "https://frikitest-14eb5-default-rtdb.firebaseio.com/Productos.json", true)

    xhr.send(JSON.stringify(ProductObject))
    //printTable()
}

// https://frikitest-14eb5-default-rtdb.firebaseio.com/Productos.json