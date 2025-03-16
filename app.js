let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nameAmigo = inputAmigo.value.trim();

    if (nameAmigo === "") {
        alert("Escriba un nombre");
        return;
    }

    if (amigos.includes(nameAmigo)) {
        alert("La persona ya ha sido ingresada");
        return;
    }

    amigos.push(nameAmigo);
    inputAmigo.value = "";
    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agregue personas a la lista");
        return;
    }

    let tombola = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[tombola];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong>${amigoSorteado}</strong></li>`;
}