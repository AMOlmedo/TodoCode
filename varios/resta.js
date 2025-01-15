var num1=prompt("ingrese el primer numero");
var num2=prompt("ingrese el SEGUNDO numero");
var resta=num1-num2;
alert(" el resultado de la resta es: " + resta)
if (resta>0){
    alert("el resultado es mayor q cero");
    let parImpar=resta %2;
    if(parImpar==0){
       
        alert("el numero es par");
    } else{ 
        alert("es impar");
    }
}else{
    alert("el numero es menor o igual q cero");
}
console.log(" el resultado de la resta es: " + resta);


