//array para nombre 
let nombrePoke=['charmander','pikchu','bulbasur','squier'];
//matriz de habilidades
let habilidades =[[80,75,90],[65,55,95],[85,90,70],[10,25,60]];

function promHabilidad(habilidades){
    let promedios = [];
    for(let i=0;i<habilidades.length;i++){
        let fila = habilidades[i];
        let suma = fila.reduce((total, habilidad)=> total+habilidad,0);
        //el .reduce muestra todos los elem  de un vector como uno solo
        promedios[i]= suma/fila.length;
    }
    return promedios;
}

function evaluarApto(nombrePoke,promedios){

    for(let i=0;i<promedios.length;i++){
        if(promedios[i]>=70){
            console.log('el pokemon ' + nombrePoke[i] + ' es apto con' + promedios[i]);
        } else{
            console.log('el pokemon ' + nombrePoke[i] + " NO es apto con " + promedios[i]);
        }
}
}
//invocar a las funciones
let promedios2 = promHabilidad(habilidades);//variable global a difencia del otro
evaluarApto(nombrePoke,promedios2);