function agregarTarea(){
    let nuevaTareaTexto=document.getElementById("nuevatarea").value;
    if (nuevaTareaTexto === ""){
        alert("inrgrese una tarea");
        return;
    }

    let nuevaTarea=document.createElement("li"); 
    //createElement crea etiquetas dentro del DOM
    nuevaTarea.textContent=nuevaTareaTexto + " ";

    let botonEliminar=document.createElement("button");
    botonEliminar.textContent="Eliminar";

    botonEliminar.onclick=function(){ nuevaTarea.remove();}

    //agregar boton eliminar al elemento de la lista
    nuevaTarea.appendChild(botonEliminar);

    //agregar elemento a la  lista

    document.getElementById("lista").appendChild(nuevaTarea);

    document.getElementById("nuevatarea").value=""; //limpia el input



}