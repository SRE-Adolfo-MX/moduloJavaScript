

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
/*     if( $(this).is(':checked') ){
        // Hacer algo si el checkbox ha sido seleccionado
        alert("El checkbox con valor " + $(this).val() + " ha sido seleccionado");
    } else {
        // Hacer algo si el checkbox ha sido deseleccionado
        alert("El checkbox con valor " + $(this).val() + " ha sido deseleccionado");
    } */

/*     switch (valor) {
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
    } */
});