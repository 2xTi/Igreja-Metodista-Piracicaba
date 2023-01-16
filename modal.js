// Seleciona os elementos da janela modal
var modal = document.getElementById("modal");
var btn = document.getElementById("open-modal-btn");
var span = document.getElementsByClassName("close-btn")[0];

// Abre a janela modal ao clicar no botão
btn.onclick = function() {
  modal.style.display = "block";
}

// Fecha a janela modal ao clicar no botão de fechar
span.onclick = function() {
  modal.style.display = "none";
}

// Fecha a janela modal ao clicar fora dela
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
}
}