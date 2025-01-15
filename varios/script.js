/*
// alert("todo code    "  + nombre) 

//var estan declaradas para todo el codigo
var nombre = "Adrian";
var edad = 50;
var activo = false;

//let son variables q estan declaradas solo  para un bloque {}
let direccion= "nico serpa";

//const son variables q no pueden cambiar
const cte="noVaria";

console.log("Nombre: " + nombre + " " + typeof nombre);
console.log("edad: " + edad + " " + typeof edad);
console.log("estado: " + activo+ " " + typeof activo);
console.log(1>2);

//OPERADORES LOGICOS  AND &&  ,  OR||  ,  NOT  !:

//ver tablas de verdad !!

var comida=2800+1300;
var bebida=900+650;
var cuenta=(comida+bebida);
alert("el precio de la comida es: " +comida)
alert("el precio de la bebida es: " +bebida)
alert("el precio de la cuenta es: " +cuenta)
console.log("el precio de la comida es: " +comida);
console.log("el precio de la bebida es: " +bebida);
console.log("el precio de la cuenta es: " +cuenta);
*/


var nota =prompt("ingrese la nota: ");
//if (nota>=0 && nota<11) {

    switch(nota>=0 && nota<11){
        case (nota>1 && nota <4):console.log("desaprobado"); 
        break;

        case (nota> 4 && nota<7): console.log("regular");
        break;

        case (nota< 11):console.log("aprobado");
        break;

        default: console.log("la nota no corresponde");
        break;
    }
/*
}else{
    console.log("la nota no es valida. vuelva a ingrearla")
}*/



