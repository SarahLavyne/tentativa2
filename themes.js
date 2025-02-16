// Array com os temas definidos
const themes = ["azulclaro", "rosa", "amarelo", "laranja", "verde", "dark", "padrao"];

// Função para aplicar o tema salvo ou um tema padrão (nesse caso, "azulclaro")
function aplicarTema() {
  const temaSalvo = localStorage.getItem("theme") || "padrao";
  document.body.setAttribute("data-theme", temaSalvo);
}

// Função para alternar para o próximo tema na lista
function alternarTema() {
  const temaAtual = document.body.getAttribute("data-theme") || themes[0];
  let index = themes.indexOf(temaAtual);
  if (index === -1) {
    index = 0;
  }
  const novoIndex = (index + 1) % themes.length;
  const novoTema = themes[novoIndex];
  
  document.body.setAttribute("data-theme", novoTema);
  localStorage.setItem("theme", novoTema);
}

document.addEventListener("DOMContentLoaded", () => {
  aplicarTema();
  
  const themeToggleButton = document.getElementById("BotaoTema");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", alternarTema);
  }
});
