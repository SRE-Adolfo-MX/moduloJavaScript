
let arrayInfo = []
let id
let mentorsArray = []
$( '.chkd' ).on( 'click', function() {

 
        let name = $('#name').val();
        let phone = $('#phone').val();
        let git = $('#git').val();
        let objData = {
            name,
            phone,
            git
        }
        arrayInfo.push(objData)
    console.log(arrayInfo)
    createProduct(arrayInfo)
    
});


const createProduct = (dataObj) => {
    $.ajax({
        method: "POST", 
        url: "https://api-13va-default-rtdb.firebaseio.com/Adolf/mentors.json",
        data: JSON.stringify(dataObj),
        success: (response)=> {
            console.log(response)
        },
        error: error => {
            console.log(error)
        }
    })
}

const getData = () => {
    let dataMentors
    $.ajax({
        method: "GET",
        url: "https://api-13va-default-rtdb.firebaseio.com/Adolf/mentors.json",
        success: response => { 
            // console.log('response al terminar la peticion',response)
          
            dataMentors = response
            
        },
        error: error => {
            console.log(error)
        },
        async: false
    })
    // console.log(products)
    return dataMentors
}

let result = getData()

            
    for (const [key, data] of Object.entries(result)) {
        
        let id = key;
        //console.log(data)
        let {git, name, phone} = data[0]
        let keyObj = {
            id,
            git,
            name,
            phone
        }
        //console.log(keyObj)
        mentorsArray.push(keyObj)
    }



//let result2 = arrayAlumns()

//console.log(mentorsArray)

const printProducts = () => {
    let list = document.querySelector("#list-products")

     let allProducts = mentorsArray.reduce((acc, info) => {
        let {id, git, name, phone} = info
        let cardProduct = `
        <div class="col-12 col-md-6 d-flex justify-content-center my-3" style="border-style: solid; border-color: black;">
          <article class="card-anime">
            <header class="card-anime-header d-flex justify-content-between mb-2" styles="">         
            </header>
            <section class="card-anime-body">
              <h3>${name}</h3>
              <p>${phone}</p>
              <h4>${git}</h4>
            </section>
            <footer class="card-anime-footer d-flex justify-content-between mt-4">
              <div class="heart">
                <i class="far fa-heart"></i>
              </div>
              <button data-product-id="${id}" value="${id}" class="Edi btn btn-primary">Editar <i class="fas fa-cart-plus"></i></button>
              <button data-product-id="${id}" value="${id}" class="Del btn btn-danger">Eliminar <i class="fas fa-cart-plus"></i></button>
            </footer>
          </article>
        </div>
        `
        return acc + cardProduct
    }, "")
    //console.log(allProducts)
    list.innerHTML = allProducts        
}


printProducts();

const deleteProduct = keyMentor => {
    $.ajax({
        method: "DELETE", 
        url: `https://api-13va-default-rtdb.firebaseio.com/Adolf/mentors/${keyMentor}.json`,
        success: (response) => {
            console.log(response);
        },
        error: error => {
            console.log(error);
        }
    })
}

$( '.Del' ).on( 'click', function() {
    let valor = $(this).val()
    console.log(valor)
    deleteProduct(valor)

});
