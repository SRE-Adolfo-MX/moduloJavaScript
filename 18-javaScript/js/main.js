// vanilla
/* 
document.getElementById("save-user").addEventListener("click", () =>{
    console.log("Guardar user...")
}) */


// JQUERY

$("#save-user").click(() =>{
    console.log("JQUERY")
})

$("#toggle-text").click(()=>{
/*     // vanilla
    document.getElementById("text").classList.add("d-none")
 */
/*     JQUERY
    $("#text").hide() */

/* 
    // vanilla
    let elemento = document.getElementById("text")
    let elementoClass = elemento.classList.contains("d-none")

    elementoClass
    ? elemento.classList.remove("d-none")
    : elemento.classList.add("d-none")
 */
    //JQUERY
    $("#text").toggle()
})


/* $("#btn-danger").click(()=>{
    $(".text-danger").toggle()
})

$("#btn-warning").click(()=>{
    $(".text-warning").toggle()
})


$("#btn-primary").click(()=>{
    $(".text-primary").toggle()
}) */


$(".btn-secondary").click((event)=>{
    let valor = event.target.innerText
    //console.log(valor)

    switch (valor) {
        case 'Borrar Danger':
            $(".text-danger").remove();
            break;
        case 'Borrar Warning':
            $(".text-warning").remove();
            break;
        case 'Borrar Primary':
            $(".text-primary").remove();
            break;
        default:
            console.log("Seleccion incorrecta")
    }
})