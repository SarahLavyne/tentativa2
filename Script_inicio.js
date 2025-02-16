document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("historias-container");
    const mensagemVazia = document.getElementById("mensagem-vazia");

    // Recupera as histórias do localStorage
    const historias = JSON.parse(localStorage.getItem("historias")) || [];

    // Função para atualizar a exibição de histórias
    function atualizarHistorias() {
        container.innerHTML = ""; // Limpa o container
        if (historias.length === 0) {
            mensagemVazia.style.display = "block"; // Exibe a mensagem
        } else {
            mensagemVazia.style.display = "none"; // Esconde a mensagem
            historias.forEach((historia, index) => {
                // Cria os elementos para exibição
                const historiaDiv = document.createElement("div");
                historiaDiv.className = "historia";

                const img = document.createElement("img");
                img.src = historia.imagem || "default.jpg"; // Imagem padrão se não houver
                img.alt = `Imagem da história ${historia.titulo}`;
                img.className = "historia-imagem";

                const titulo = document.createElement("h3");
                titulo.textContent = historia.titulo;

                const genero = document.createElement("p");
                genero.textContent = `Gênero: ${historia.genero}`;

                const data = document.createElement("p");
                data.textContent = `Data: ${historia.data}`;

                const texto = document.createElement("p");
                texto.textContent = historia.historia;

                // Botão "Apagar"
                const apagarButton = document.createElement("button");
                apagarButton.textContent = "Apagar";
                apagarButton.className = "btn btn-danger";
                apagarButton.addEventListener("click", () => {
                    // Remove a história da lista e do localStorage
                    historias.splice(index, 1); // Remove pelo índice
                    localStorage.setItem("historias", JSON.stringify(historias));

                    // Atualiza a exibição das histórias
                    atualizarHistorias();
                });

                // Adiciona todos os elementos ao container
                historiaDiv.appendChild(img);
                historiaDiv.appendChild(titulo);
                historiaDiv.appendChild(genero);
                historiaDiv.appendChild(data);
                historiaDiv.appendChild(apagarButton);
                container.appendChild(historiaDiv);
            });
        }
    }

    // Inicializa a exibição
    atualizarHistorias();
});
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("historias-container");
    const mensagemVazia = document.getElementById("mensagem-vazia");

    // Recupera as histórias do localStorage
    const historias = JSON.parse(localStorage.getItem("historias")) || [];

    // Função para atualizar a exibição de histórias
    function atualizarHistorias() {
        container.innerHTML = ""; // Limpa o container
        if (historias.length === 0) {
            mensagemVazia.style.display = "block"; // Exibe a mensagem
        } else {
            mensagemVazia.style.display = "none"; // Esconde a mensagem
            historias.forEach((historia, index) => {
                // Cria os elementos para exibição
                const historiaDiv = document.createElement("div");
                historiaDiv.className = "historia";

                const img = document.createElement("img");
                img.src = historia.imagem || "default.jpg"; // Imagem padrão se não houver
                img.alt = `Imagem da história ${historia.titulo}`;
                img.className = "historia-imagem";
                img.addEventListener("click", () => {
                    // Redireciona para a página de leitura
                    window.location.href = `./Leitura_novo.html?titulo=${encodeURIComponent(historia.titulo)}&data=${encodeURIComponent(historia.data)}&imagem=${encodeURIComponent(historia.imagem || "default.jpg")}&texto=${encodeURIComponent(historia.historia)}&genero=${encodeURIComponent(historia.genero)}`;
                });

                const titulo = document.createElement("h3");
                titulo.textContent = historia.titulo;

                const genero = document.createElement("p");
                genero.textContent = `Gênero: ${historia.genero}`;

                const data = document.createElement("p");
                data.textContent = `Data: ${historia.data}`;

                // Botão "Apagar"
                const apagarButton = document.createElement("button");
                apagarButton.textContent = "Apagar";
                apagarButton.className = "btn btn-danger";
                apagarButton.addEventListener("click", () => {
                    historias.splice(index, 1); // Remove pelo índice
                    localStorage.setItem("historias", JSON.stringify(historias));
                    atualizarHistorias();
                });

                // Adiciona todos os elementos ao container
                historiaDiv.appendChild(img);
                historiaDiv.appendChild(titulo);
                historiaDiv.appendChild(genero);
                historiaDiv.appendChild(data);
                historiaDiv.appendChild(apagarButton);
                container.appendChild(historiaDiv);
            });
        }
    }
  // Inicializa a exibição das histórias
  atualizarHistorias();
});
