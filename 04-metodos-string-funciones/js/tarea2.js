/*Ejercicios */
/*
Deducir:
input: "kodemia"
output: "aimedok"
*/




function textoInvertido(texto) {
    return texto.split('').reverse().join('');
}

console.log(textoInvertido('kodemia'));

/*
input: "a very large string"
output: "A VeRy lArGe sTrInG" 

input: "abcdefg"
output: "AbCdEfG"

*/

function letrasMayuscula(string){
    let numCaracteres = string.length
    //console.log(numCaracteres)

    let n = 0;

    while (n < numCaracteres) {
        
        let letra = string.charAt(n);
        let variablepalabra = new RegExp(letra, "gi");
        string = string.replace(variablepalabra,letra.toUpperCase())
        n=n+2;
    }
       console.log(string)
    
    
   }
   
   let CadenaTexto= 'abcdefg'; 


   console.log(letrasMayuscula(CadenaTexto))


/*
Crear una funcion que me indique si un string comienza con
 -una vocal
 -consonante
 -numero
 -caracter especial
*/

function stringIncio(string){
    let lista = new Object() 
    lista.number= ['0','1','2','3','4','5','6','7','8','9']
    lista.vocal= ['A','E','I','O','U']
    lista.consonante= ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z']
    lista.simbolos= ['#','$','%','&','/','(',')','=','?','¡','¿']
    letra = string.charAt(0).toUpperCase();
    
    if (!string){
        return "Cadena invalida"
    }else if (lista.number.indexOf(letra) >= 0){
        return "La cadena comienza con un numero"
    }else if (lista.vocal.indexOf(letra) >=0){
        return "La cadena comienza con un vocal"
    }else if (lista.consonante.indexOf(letra) >=0){
        return "La cadena comienza con una consonante"
    }else if (lista.simbolos.indexOf(letra) >=0){
        return "La cadena comienza con un simbolo"
    }
   }
   
   CadenaTexto= '$abcdefg'; 


   console.log(stringIncio(CadenaTexto))
