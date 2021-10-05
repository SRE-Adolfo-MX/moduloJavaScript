$( '.chkd' ).on( 'click', function() {

    let valor = $(this).val()
    console.log(valor)
    switch (valor) {
        case 'Cuadrado':
            $(".Cuadrado").toggle();
            break;
        case 'Rectangulo':
            $(".Rectangulo").toggle();
            break;
        case 'Circulo':
            $(".Circulo").toggle();
            break;
        default:
            console.log("Seleccion incorrecta")
    } 
});

let arrayImage = [
   { 
       number: 1,
       image: "https://github.githubassets.com/images/modules/logos_page/Octocat.png"
   }, 
   { 
        number: 2,
        image: "https://image.freepik.com/vector-gratis/ilustracion-negocio-concepto-devops-gradientes-neon-rojo-azul_52246-363.jpg"
    },
    { 
        number: 3,
        image: "https://www.cloudzero.com/hubfs/blog/devops-tools-2.jpg"
    }
]

let number = 0;
$('#Anterior').attr('disabled','disabled')

$(".btn-secondary").click((event)=>{

    let valor = event.target.innerText

    $('#Anterior').removeAttr('disabled');

    if(valor === "Siguiente -->" && number < arrayImage.length){

        if (number === arrayImage.length){
            $('#Siguiente').attr('disabled','disabled');
        }
        console.log(number)
        console.log(arrayImage[number].image)
        let img = arrayImage[number].image
        $('.img-rounded').attr("src",img)
    
        number++;

    } 

     if(valor === "<-- Anterior" ) {

        $('#Anterior').removeAttr('disabled');
        console.log("entro ante")
        console.log(number)
        number--;
        console.log(number)
        console.log(arrayImage[number].image)
        let img = arrayImage[number].image
        $('.img-rounded').attr("src",img)
    } 
    
    
})