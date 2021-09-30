const xhr = new XMLHttpRequest()

//console.log(xhr);
let kodersArray = []
// Agregando el listener para ver el estado de mi peticion
xhr.addEventListener('readystatechange', () => {
    //console.log(xhr)
    
    if (xhr.status >= 200 && xhr.status <=299){
 
        if (xhr.readyState === 4){
            array = JSON.parse(xhr.response);
            //console.log(array.koder1.name)
            let keyObj = {}
            
            for (const [key, data] of Object.entries(array)) {
                    let id = key;
                    let {name} = lastName
                    console.log(name)
                    keyObj = {
                        lastName
                    }
                    
                    kodersArray.push(keyObj)

                    
              }
        }
    } else {
        console.log(`Ocurrio un problema ${xhr.status} favor de revisar`)
    }
    //console.log(kodersArray)
    printList(kodersArray)
})

//Instruccion que me permite abrir la peticion
xhr.open("GET","https://api-13va-default-rtdb.firebaseio.com/.json", true) //true asincrono o false sincrona

xhr.send();

/*
Paso 1 crear una instancia de mi objeto xmlhttprequest
Paso 2 agregar el listener que me permita estar al tanto de los cambios de mi peticion
Paso 3 Crear Instruccion que me permite abrir la peticion
Paso 4 Enviar la peticion
*/

 const printList = (userArray) => {
     console.log(userArray)
    let ol = document.querySelector("#list-users")
    userArray.forEach((user) => {
        let {lastName, name} = user
        let li = document.createElement("li");
        let text = `lastName: ${lastName} - Name: ${name}`;
        li.textContent = text
        ol.appendChild(li)
    }) 
} 