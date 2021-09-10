
let listas = [];


function names() {
    let nombres = [];
    let cont = '';
    let x;
    let l;
    let lista=0;
    let cantidadCoder;

    cantidadCoder=prompt("Cuantos coders quieres capturar?")
    Number(cantidadCoder);

    for (let i = 0; i < cantidadCoder; i++) {
        x = prompt("Ingresa el nombre completo del Koder: ", "");
        nombres.push(x);
        lista++;
        l=`Koder ${lista}: ${nombres[i]}`
        listas.push(l);
        console.log(`Koder ${lista} ${nombres[i]}`);
    }

    
}



names();


function searchName()
{ 
    let count = listas.length;
    let respuesta = prompt(`Seleciona el numero de un Koder` );
    respuesta--;
    let koder=listas[respuesta]
    if (koder === undefined || koder === null){
        console.log("No existe ningun koder con ese numero de lista")
    }else {
        console.log(`El coder que tiene el numero ingresado es: ${koder}`);
    }   
}

searchName();

function koderInitials() {
    let initials="";
    for(i=0; i<;i++){
        
    }
}

/*
A partir del ejercicio anterior:
Crear una funcion que permita saber el nombre de algun koder
basado en su numero asignado
- imprimir la lista de koders en orden alfabetico descendiente
- Crear una nueva lista que contenga los nombres de los koders
  con la siguiente estructura
  [
      "koder 1: Emi de Leon (E. D. L.)"
      "koder 2: Elias Herrera (E. H.)"
      "koder 3: Armando Rios (A. R.)"
  ]
- Permitir agregar un koder en alguna posicion deseada, 
  por ejemplo: "Fanny Alvarez, lugar 3"
*/