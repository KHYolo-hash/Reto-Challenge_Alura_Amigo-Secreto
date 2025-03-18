let amigos = []; //Lista en donde se van a alojar los amigos ingresados
function agregarAmigo(){ // Función para agregar los amigos
    let ingresarAmigo = document.getElementById("amigo");
    let nombreAmigo = ingresarAmigo.value;

    if(!nombreAmigo){ //Validación de campo vacío
        alert("No ha ingresado un nombre para sortear. Por favor, ingrese al menos dos nombres.")
        return; // El return permite detener el Loop en caso de que no se cumpla la función y regresar al inicio.
    }
    amigos.push(nombreAmigo); //Agregar los amigos a la lista
    ingresarAmigo.value = ""; //Limpia el campo para ingresar amigos en el campo "Escribe un Nombre"
    ingresarAmigo.focus(); //Permite que el cursor quede activo en el campo "Escribe un Nombre"
    mostrarAmigos(); // Función que muestra la lista de amigos ingresados
}

function mostrarAmigos(){ //Permite visualizar los amigos ingresados a modo de lista
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // El innetHTML ubica el contenido (las etiquetas, en este caso) en el HTML

    for(let i = 0; i < amigos.length; i++){ //Ciclo que leerá la posición en el que fueron almacenados los amigos ingresados
        let nuevoAmigo = document.createElement("li"); // Para cada nuevo nombre de la lista, creará un elemento "li"
        nuevoAmigo.textContent = amigos[i];
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo(){ //Función que activa el botón Sortear Amigos
    if(amigos.length === 0){ //Validación de la cantidad mínima de amigos para sortear (Al menos 2)
        alert("No hay amigos para sortear. Ingrese al menos 2 nombres.");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)]; // Selecciona un amigo dentro de la lista. El floor convierte el decimal obtenido en Random en un número entero.
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El Amigo Sorteado es: ${amigoSorteado}`; // Se utilizan las comillas invertidas o Template String para declarar la variable

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = ""; // Luego de escoger al amigo sorteado, deja limpia la lista, enviando un String Vacío
}