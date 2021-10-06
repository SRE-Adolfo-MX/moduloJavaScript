$( '.chkd' ).on( 'click', function() {

    let valor = $(this).val()
    console.log(valor)
    switch (valor) {
        case 'Cuadrado':
            $(".Rectangulo").toggle();
            $(".Circulo").toggle();
            break;
        case 'Rectangulo':
            $(".Cuadrado").toggle();
            $(".Circulo").toggle();
            break;
        case 'Circulo':
            $(".Rectangulo").toggle();
            $(".Cuadrado").toggle();
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
//$('#Anterior').attr('disabled','disabled')

/* $(".btn-secondary").click((event)=>{

    let valor = event.target.innerText

    $('#Anterior').removeAttr('disabled');

    if(valor === "Siguiente -->" && number < arrayImage.length){


        console.log(number)
        console.log(arrayImage[number].image)
        let img = arrayImage[number].image
        $('.img-rounded').attr("src",img)
    
        number++;
        if (number === arrayImage.length){
            $('#Siguiente').attr('disabled','disabled');
            number--;
        }

    } 

     if(valor === "<-- Anterior" ) {

        $('#Anterior').removeAttr('disabled');
        console.log("entro ante")
        console.log(number)
        number--;
        if (number === -1){
            $('#Anterior').attr('disabled','disabled');
            $('#Siguiente').removeAttr('disabled');
            number++;
        }
        console.log(number)
        console.log(arrayImage[number].image)
        let img = arrayImage[number].image
        $('.img-rounded').attr("src",img)

    } 
    
    
}) */

const setImgSrc = (src) => {
    $('.img-rounded').attr("src",src).fadeTo("slow",0, () =>{
        $('.img-rounded').attr("src",src).fadeTo("slow",1)
    })
}

const setButtonsstate = () => {
    number === 0 
    ? $('#Anterior').attr('disabled','disabled')
    : $('#Anterior').removeAttr('disabled')

    number === arrayImage.length - 1 
    ? ($('#Siguiente').attr('disabled','disabled'), $('#Agregar').removeClass("d-none"))
    : ($('#Siguiente').removeAttr('disabled'), $('#Agregar').addClass("d-none"))
}

const forward = () => {
 number++;
 //$('#Anterior').removeAttr('disabled');
 let src = arrayImage[number].image;
 setImgSrc(src)
 setButtonsstate();

}

const backward = () => {
    number--;
    let src = arrayImage[number].image;
    setImgSrc(src)
    setButtonsstate();
   }

let src = arrayImage[number].image;
setImgSrc(src)   

$('#Siguiente').click(forward);
$('#Anterior').click(backward);
setButtonsstate();