// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Requisito 1: Función para agregar un amigo al array
function agregarAmigo(){
    if (document.querySelector('#amigo').value === ''){
        alert('Por favor inserte un nombre:');
    }
    else{
        amigos.push(document.querySelector('#amigo').value);
        document.querySelector('#amigo').value = '';
        console.log(amigos);
        actualizarLista();
    }
}

// Requisito 2: Función para actualizar la lista de amigos
function actualizarLista(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = "";

    for(let i=0; i<amigos.length; i++){
        let li = document.createElement("li");

        li.textContent = amigos[i];

        lista.appendChild(li);
    }
}

// Requisito 3: Seleccionar de manera aleatoria uno de los nombres
function sortearAmigo(){
    if (amigos.length == 0){
        alert("No hay amigos para escoger");
    }
    else{
        let sorteo = Math.floor(Math.random()*amigos.length);
        let amigoElegido = amigos[sorteo];
        document.querySelector('#listaAmigos').innerHTML = '';
        document.querySelector('#resultado').innerHTML = "El amigo secreto sorteado es: " + amigoElegido;
    }
}