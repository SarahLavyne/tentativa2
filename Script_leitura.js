const urlParams = new URLSearchParams(window.location.search);
const titulo = urlParams.get("titulo");
const data = urlParams.get("data");
const imagem = urlParams.get("imagem");
const texto = urlParams.get("texto");
const genero = urlParams.get("genero");

// Exibe os dados na página LEITURA
document.getElementById("titulo").textContent = titulo;
document.getElementById("data").textContent = `Data: ${data}`;
document.getElementById("imagem").src = imagem;
document.getElementById("texto").textContent = texto;
document.getElementById("genero").textContent = genero;

// Redireciona para a página de edição
function redirecionarEdicao() {
    const urlParams = new URLSearchParams(window.location.search);
    const titulo = urlParams.get("titulo");
    const data = urlParams.get("data");
    const imagem = urlParams.get("imagem");
    const texto = urlParams.get("texto");
    const genero = urlParams.get("genero");

    // Redireciona para a página de edição com os dados da história
    window.location.href = `Criar.html?titulo=${encodeURIComponent(titulo)}&data=${encodeURIComponent(data)}&imagem=${encodeURIComponent(imagem)}&texto=${encodeURIComponent(texto)}&genero=${encodeURIComponent(genero)}`;
    
}
function redirecionarInicio() {
    window.location.href = `index.html`;
}
