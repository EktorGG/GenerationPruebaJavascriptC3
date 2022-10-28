/** José es el dueño de un minimarket de barrio, lleva más de 15 años administrando el
funcionamiento completo de su negocio, siempre lo ha hecho de manera análoga, lo cual en un
inicio no presentaba problemas, pero con el pasar de los años esto ha generado errores
humanos, pérdidas de registros, documentos estropeados por la antigüedad y una nula
posibilidad de poder estudiar el real crecimiento de su negocio año tras año.
José te contrata para generar un software para su negocio.

En esta segunda instancia tu tarea será generar funciones utilizando JavaScript
Funciones solicitadas:

obs: los días se deben ingresar como tipo String y los valores de los productos a
comprar se deben trabajar con arreglos, por ejemplo = [1000,500,650,8000]

● Don José todos los martes y jueves realiza un 20% de descuento en el total de las
compras, crea una función la cual debe recibir un parámetro del día y el arreglo de
valores de los productos a comprar, esta debe retornar el total final de la compra según
corresponda o no descuento.

● Don José hace un 5% de descuento a los clientes que compran más de 3 productos y al
menos uno de ellos tiene un valor mayor a 10.000, realiza una función que calcule el
total verificando si corresponde o no el descuento.

● Se desea tener una función verificadora encargada de revisar si dentro de el arreglo de
valores de los productos a comprar no existan valores negativos ingresados por error,
en caso de no existir debe retornar un mensaje de éxito, en caso contrario debe retornar
un mensaje de error junto con el número negativo y el índice en el que se encontraba.

● Dado el siguiente arreglo [200,5500,900,7000,500,300] con los valores de cada
producto
○ Crea una función que retorne el valor del producto más costoso.
○ Crea una función que retorne el valor del producto menos costoso.
*/

//Compras ficcticias para usar de ejemplo
var compra = [100, 50, 400, 1000];
var compra1 = [4000, 5000, 10000];
var compra2 = [1000, 4000, 5000];
var compra3 = [1000, -2500, -3000, 7500];
var compra4 = [1000, 2500, 3000, 7500];
var compraEj = [200,5500,900,7000,500,300];

//Función para sumar el total de la compra, no solicitada pero bastante útil
function sumaTotalCompra(compraIngresada) {
    //Variable acumuladora
    let sumaCompra = 0;
    //Ciclo for para recorrer la matriz
    for (i = 0; i < compraIngresada.length; i++) {
        //Para cada elemento recorrido, suma el valor del índice a la variable acumuladora
        sumaCompra = sumaCompra + compraIngresada[i];
    }
    //console.log("La suma total de la compra es " + sumaCompra);
    return sumaCompra;
}
//Prueba de función sumaTotalCompra
console.log("La suma de los valores de la compra es " + sumaTotalCompra(compra));


//Función para hacer descuentos del 20% días martes y jueves recibiendo un parámetro del día y arreglo de compras.
function dctoMarJue(dia, compraIngresada) {
    //Variables acumuladoras
    let compraConDcto = 0;
    let dcto = 0;
    //Si la variable día es igual a mar o jue, realiza lo siguiente:
    if (dia == "mar" || dia == "jue") {
        //Muestra en consola que se aplica el descuento
        console.log("Aplica descuento del 20% de martes y jueves");
        //Calcula el descuento sacando el 20% al total de la compra (utilizando la función auxiliar creada al inicio)
        dcto = sumaTotalCompra(compraIngresada) * 0.2;
        //Realiza la resta del descuento calculado al precio original
        compraConDcto = sumaTotalCompra(compraIngresada) - dcto;
        //Muestra en consola el precio final con el desucuento aplicado
        console.log("El precio final es " + compraConDcto);
    } else { //En caso de que el día no sea mar o jue, indicar que no aplica el descuento y entregar el precio original como final
        console.log("No aplica descuento de martes y jueves")
        compraConDcto = sumaTotalCompra(compraIngresada)
        console.log("El precio final es " + sumaTotalCompra(compraIngresada))
    }
}
//Prueba de función dctoMarJue

dctoMarJue("mar", compra)
dctoMarJue("lun", compra);


//Funcion para hacer un 5% en las compras de  + de 3 productos con al menos 1 de ellos con un valor mayor a 10000
function verificarDcto(compraIngresada) {
    //Variables acumuladoras
    let compraConDcto = 0;
    let dcto = 0;
    //Declaración de requisitos como booleanos
    let req1 = false
    let req2 = false
    //Ciclo for para recorrer la matríz y verificar que se cumplan los requisitos
    for (i = 0; i < compraIngresada.length; i++) {
        //Si la extensión de la matríz cumple el mínimo...
        if (compraIngresada.length >= 3) {
            //El primer requisito pasa de false a true
            req1 = true;
            //Se realiza la segunda comprobación, si alguno de los valores de los productos es mayor o igual a 10000...
            if (compraIngresada[i] >= 10000) {
                //El segundo requisito pasa de false a true
                req2 = true;
            }
        }
    }//Fin del ciclo for para comprobar los requisitos
    
    //Si ambos requisitos se están cumpliendo...
    if (req1 == true && req2 == true) {
        //Muestra en consola que los requisitos se han cumplido
        console.log("Esta compra cumple con los requisitos para realizar un 5% de descuento");
        //Realiza el cálculo del descuento del 5% a aplicar utilizando la función auxiliar
        dcto = sumaTotalCompra(compraIngresada) * 0.05;
        //Calcula el precio final restando el descuento al precio original
        compraConDcto = sumaTotalCompra(compraIngresada) - dcto;
        //Muestra en consola el precio final con el descuento ya aplicado
        console.log("El precio final es " + compraConDcto);
    } else { //Si uno o los dos requisitos no se han cumplido, muestra en consola un mensaje indicando que el descuento no aplica
        console.log("Esta compra no cumple con los requisitos para realizar un 5% de descuento");
        console.log("El precio final es " + sumaTotalCompra(compraIngresada));
    }
}
//Prueba de función verificarDcto
verificarDcto(compra1);
verificarDcto(compra2);


//Función para verificar que no exista algún valor negativo por error, debe mandar un mensaje en caso correcto y en caso negativo
function verificarNoNegativos(compraIngresada) {
    //Ciclo for para recorrer la matriz
    for (i = 0; i < compraIngresada.length; i++) {
        //Si alguno de los elementos es menor a 0, significa que es un número negativo
        if (compraIngresada[i] < 0) {
            //Muestra en consola el valor que ha sido ingresado incorrectamente
            console.log("El valor " + compraIngresada[i] + " ha sido ingresado incorrectamente (negativo)")
        } else { //En caso contrario, muestra en consola que el valor ha sido ingresado correctamente
            console.log("El valor " + compraIngresada[i] + " ha sido ingresado correctamente")
        }
    }
}
//Prueba de función verificarNoNegativos
verificarNoNegativos(compra3);
verificarNoNegativos(compra4);


//Función que retorne el valor del producto más costoso
function productoCostoso(compraIngresada) {
    //Declaración de variable acumuladora
    let mayorPrecio = compraIngresada[0]
    //Ciclo for para recorrer la matriz
    for (i = 0; i < compraIngresada.length; i++) {
        //Si algún elemento de la matriz es mayor a la variable acumuladora...
        if (compraIngresada[i] > mayorPrecio) {
            //Ese elemento pasará a reemplazar a la variable acumuladora a la espera de una nueva comparación
            mayorPrecio = compraIngresada[i]
        }
    }
    //Muestra en pantalla el precio mayor
    console.log("El precio mayor es " + mayorPrecio);
}
//Prueba de función productoCostoso con la compra entregada en el ejemplo.
productoCostoso(compraEj)

//Función que retorne el valor del producto menos costoso, es básicamente lo mismo que la función anterior pero a la inversa.
function productoMenosCostoso(compraIngresada) {
    let menorPrecio = compraIngresada[0]
    for (i = 0; i < compraIngresada.length; i++) {
        if (compraIngresada[i] < menorPrecio) {
            menorPrecio = compraIngresada[i]
        }
    }
    console.log("El precio menor es " + menorPrecio);
}
//Prueba de función productoMenosCostoso
productoMenosCostoso(compraEj);