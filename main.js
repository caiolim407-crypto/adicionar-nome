const nomes = ["caio", "lima", "domingos"]
const lista = document.getElementById("lista")
const campoNome = document.getElementById("inputNome");
const btnAdicionar = document.getElementById("btnAdicionar");



function mostrarNomes() {
  lista.innerHTML = ""; 
  for (let nome of nomes) {
    lista.innerHTML += `<li>${nome}</li>`;
  }
}

btnAdicionar.onclick = function() {
  if (campoNome.value !== "") {
    nomes.push(campoNome.value);
    campoNome.value = "";
    mostrarNomes();
  }

};
campoNome.addEventListener("keydown", function(evento) {
  if (evento.key === "Enter") {
    btnAdicionar.click(); // Simula o clique do botão
  }
});

mostrarNomes()