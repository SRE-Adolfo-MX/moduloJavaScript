// xmlHttpRequest()

// let xhr = new XMLHttpRequest();

// xhr.addEventListener('readystatechange', () => {
//     // el estado de la peticion y el estatus del response
// })

// xhr.open("METHOD", "url", true)

// xhr.send()


// AJAX con jQuery

// $.ajax({
//     method: "GET", /*|| "POST" || "PUT" || "DELETE" || "PATCH"*/
//     url: "endpoint", /*A donde hacemos la peticion */
//     data: JSON.stringify({}), /*La que se envia en el body de la peticion - POST, PUT, PATCH */
//     success: (response) => {
//         // callback para cuando la peticion sea exitosa
//     },
//     error: (error) => {
//         // callback para cuando hay un error en la peticion
//     },
//     async: true
// })


// funciones AJAX
const getData = () => {
    let products
    $.ajax({
        method: "GET",
        url: "https://api-friki-market-default-rtdb.firebaseio.com/products.json",
        success: response => { 
            // console.log('response al terminar la peticion',response)
            products = response
        },
        error: error => {
            console.log(error)
        },
        async: false
    })
    // console.log(products)
    return products
}

const createProduct = (productObject) => {
    $.ajax({
        method: "POST", 
        url: "https://api-friki-market-default-rtdb.firebaseio.com/products.json",
        data: JSON.stringify(productObject),
        success: (response)=> {

        },
        error: error => {

        }
    })
}

const updateProduct = (keyProduct, newDataProduct) => {
    $.ajax({
        method: "PATCH",
        url: `https://api-friki-market-default-rtdb.firebaseio.com/products/${keyProduct}.json`, 
        data: JSON.stringify(newDataProduct),
        success: (response)=> {

        },
        error: error => {

        }
    })
}
const deleteProduct = keyProduct => {
    $.ajax({
        method: "DELETE", 
        url: `https://api-friki-market-default-rtdb.firebaseio.com/products/${keyProduct}.json`,
        success: (response) => {

        },
        error: error => {

        }
    })
}



// Funciones DOM



// const

// variables globales
// todas funciones
// ejecucion de codigo


// Asycn: true

/*
46 - undefined
47 console.log("más codigo JS")
49 console.log("la suma es", suma)
38 console.log('response al terminar la peticion',response)
*/

// async: false

/*
38 console.log('response al terminar la peticion',response)
46 - productos  de la base de datos
47 console.log("más codigo JS")
49 console.log("la suma es", suma)
*/

let products = getData()

// https://api-13va-default-rtdb.firebaseio.com/[su-nombre]/mentors.json

// sincrono




// asincrono