/*
Práctica:

Generar una colección de Objetos de tipo Product que tenga las siguientes propiedades:
    nombre
    description
    precio de costo
    clasificación
    porcentaje de Ganancia
    precio de venta
    precios de los ultimos 6 meses en una colección [23,12,45,56,12,10]
    Cantidad vendidas en la ultima semana
    Fecha de Caducidad
    
💫 De igual forma es necesario realizar lo siguientes calculos por cada Producto:

- Calcular el precio de Venta y asignarlo a su correspondiente propiedad
- Obtener los diás restantes para que caduque el producto
- Obtener el promedio de precio de los ultimos 6 meses

💫 Una vez obtenido la colleción de Productos obtener lo siguiente:

- Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana
- Los productos que tengan menor a 10 cantidades vendidas en la ultima semana
- Los productos que se encuentren a menos de 15 días proximas a caducar
Happy Koding 🚀
*/

const productCollection = [
    {
        nombre: "Coca Cola",
        descripcion: "lata 250ml",
        precioDeCosto: "10",
        clasificacion: "liquido",
        porcentajeDeGanancia: "120%",
        precioDeVenta: "15",
        preciosSeisMeses: [
            {
                mes: "1",
                precio: 13
            },
            {
                mes: "2",
                precio: 13
            },
            {
                mes: "3",
                precio: 10
            },
            {
                mes: "4",
                precio: 13
            },
            {
                mes: "5",
                precio: 13
            },
            {
                mes: "6",
                precio: 13
            }
        ],
        cantidadVendidaUltimaSemana: "100",
        fechaDeCaducidad: "01/01/2028" 
    },
    {
        nombre: "Sabritones",
        descripcion: "bolsa 500ml",
        precioDeCosto: "5",
        clasificacion: "botana",
        porcentajeDeGanancia: "150%",
        precioDeVenta: "10",
        preciosSeisMeses: [
            {
                mes: "1",
                precio: 9
            },
            {
                mes: "2",
                precio: 11
            },
            {
                mes: "3",
                precio: 10
            },
            {
                mes: "4",
                precio: 13
            },
            {
                mes: "5",
                precio: 9
            },
            {
                mes: "6",
                precio: 13
            }
        ],
        cantidadVendidaUltimaSemana: "2",
        fechaDeCaducidad: "25/09/2021" 
    }
];
let productArray=[];

const products= productCollection.map((name)=> {
    let product= new Product (name)
    productArray.push(product)
    console.log(product.precioDeVenta())
    console.log(product.fechaFinalCaducidad())
    console.log(product.promedio())

        return product
})

console.log("****Los productos que tengan mayor a 50 cantidades vendidas en la ultima semana***")
const prodMa50 = arrayProduct => {
     let prod = productArray.reduce((accum, pro) =>{
         return pro.cantidadVendidaUltimaSemana > 50
             ? [...accum, pro]
             : accum
             
         },[])
         return prod
     }
     console.log(prodMa50(productArray))

console.log("****Los productos que tengan menor a 10 cantidades vendidas en la ultima semana***")
const prodMe10 = arrayProduct => {
    let prod = productArray.reduce((accum, pro) =>{
        return pro.cantidadVendidaUltimaSemana < 10
            ? [...accum, pro]
            : accum
            
        },[])
        return prod
    }
    console.log(prodMe10(productArray))

    console.log("****Los productos que se encuentren a menos de 15 días proximas a caducar***")
    const cad15 = arrayProduct => {
        let prod = productArray.reduce((accum, pro) =>{
            let f = new Date();
            let fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
            let aFecha1 = fecha.split('/');
            let aFecha2 = pro.fechaDeCaducidad.split('/');
            let fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
            let fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
            let dif = fFecha2 - fFecha1;
            let dias = Math.floor(dif / (1000 * 60 * 60 * 24));
            return dias < 15
                ? [...accum, pro]
                : accum
                
            },[])
            return prod
        }
        console.log(cad15(productArray))

function Product ({ nombre, descripcion, precioDeCosto, clasificacion, porcentajeDeGanancia,
                precioDeVenta,preciosSeisMeses,cantidadVendidaUltimaSemana,fechaDeCaducidad}){
    this.nombre= nombre,
    this.descripcion= descripcion,
    this.precioDeCosto= precioDeCosto,
    this.clasificacion= clasificacion,
    this.porcentajeDeGanancia= porcentajeDeGanancia,
    this.precioDeVenta= function(){
        let valorPorcentaje = this.porcentajeDeGanancia.replace(/%/g,"");
        let precio = this.precioDeCosto;
        let total = ((Number(valorPorcentaje)*Number(precio))/100);
        return `El precio del venta del producto: ${this.nombre} es de ${total}`
    },
    this.preciosSeisMeses= preciosSeisMeses,
    this.cantidadVendidaUltimaSemana= cantidadVendidaUltimaSemana,
    this.fechaDeCaducidad= fechaDeCaducidad
    this.fechaFinalCaducidad= function(){
        let f = new Date();
        let fecha = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
        let aFecha1 = fecha.split('/');
        let aFecha2 = this.fechaDeCaducidad.split('/');
        let fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
        let fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
        let dif = fFecha2 - fFecha1;
        let dias = Math.floor(dif / (1000 * 60 * 60 * 24));
        return `El tiempo de caducidad restante del producto ${this.nombre} es de ${dias} dias`;
        }
    this.promedio= function(){
         let prom= this.preciosSeisMeses.reduce((accum,precioMes)=>{
             return accum + precioMes.precio;
         },0)
         let proms = prom/this.preciosSeisMeses.length;
         return `El promedio del precio del producto: ${this.nombre} es ${proms}`;
     }   
    }
console.log(products)
