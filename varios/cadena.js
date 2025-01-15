let frase='hola,mundo,hi,world';
let long=frase.length; //;length cuenta los elementos de una cadena
console.log(' la cant de letras es: ' + long);
let frag=frase.slice(0,4);  //corta un fragmento de una cadena de carcteres
console.log(frag);
let lista=frase.split(','); //separa y crea array
console.log(lista);
let frase2=frase.substring(4,11);//separa  en subcadena. solo strings
console.log(frase2);
let mayuscula=frase.toUpperCase();
console.log(mayuscula);
let minuscula=mayuscula.toLowerCase();
console.log(minuscula);
let juntar=frase.concat(mayuscula);//concatena dos strings
console.log(juntar);
let posicion=mayuscula.indexOf('HI');
console.log('posicion ' + posicion); //encuentra una palabra en un string
//si no encutra coloca -1
let incluye=frase.includes('hi');//busca si incluye . responde booleano
console.log(incluye);
let incluye2=frase.includes('NO');
console.log(incluye2);

if (incluye ==true){
    console.log('encontre lo q buscaba');
}else{
    console.log('NO encontre lo q buscaba');
}

let nombres=['adri','marti','marce'];
let nombreAdd=prompt("ingresa el nombre:");

let estaOno=buscarNombre(nombres,nombreAdd);