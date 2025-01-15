/*
var fecha= new Date(1973,7,28,7,30, 15);//los meses empiezan desde 0  es enero  OJO!!!
alert("la fecha de nacimiento de la bestia es: " + fecha);


var dia=fecha.getDay();
var mes=fecha.getMonth();
var anio=fecha.getFullYear();
var hora=fecha.getHours();
var minuto=fecha.getMinutes();
var segundo=fecha.getSeconds();

alert("dia: " + dia + "/mes: " + (mes+1) + "/ anio: "+ anio + "hora: " +hora+minuto+segundo );
*/
var num3=parseInt(window.prompt("ingrese el primer numero"));
var num4=parseInt(window.prompt("ingrese el segundo numero"));

if(num3>num4){
    alert("el numero " + num3+ " es el mayor");
}else{ alert("el numero " + num4+ " es el mayor");
    }

function CambiarTexto(){
    let parrafo=document.getElementById("parrafo");
    parrafo.textContent="Texto Cambiado";
    parrafo.style.color="red";

}