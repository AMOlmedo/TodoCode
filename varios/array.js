let  miArrary =[1,2,3,4.5,5];
console.log (miArrary);

let miMatriz = [[1,2,3],[4,"Eureka",6],[7,8,9]];
console.log (miMatriz);
console.log (miMatriz[1][1]); //para ver solo un elemento.

console.log("===============");

//en este ejemplo recore la matriz
let posicion = ["argentina", "francia", "spain", "ultimo brasil"];
for(i=0; i<posicion.length; i++){
    console.log(posicion[i]);
}

console.log("===============");
let num1=[1,2,3];
num1.push(4); //agrega un elemento al final del array
console.log(num1);
num1.pop(); //borra el ultimo elmento
console.log(num1);
num1.shift(); //borra el primer elemnto del vector
console.log(num1);
num1.unshift(1); //agrega un elem al principio del array
console.log(num1);
console.log("===============");
let fifa = posicion.filter( posicion => posicion.includes("g"));
console.log(fifa);
let juntar = num1.concat(posicion); //concatena dos vectores
console.log(juntar);
let todo = juntar.reverse(); //revierte la posicion de los elem
console.log(todo);
todo.sort();
console.log(todo);
 