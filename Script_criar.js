document.addEventListener('DOMContentLoaded', () => {
    // Atualiza a data automaticamente no campo de data
    const dataInput = document.getElementById("data");
    const hoje = new Date();
    const dataFormatada = hoje.toLocaleDateString("pt-BR");
    if (dataInput && !dataInput.value) dataInput.value = dataFormatada;

    // Evento para envio do formulário
    const form = document.getElementById("form-criar-historia");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const titulo = document.getElementById("titulo").value;
            const genero = document.getElementById("genero").value;
            const historia = document.getElementById("historia").value;
            const imagemInput = document.getElementById("imagem");
            const imagem = imagemInput.files[0];

            if (!titulo || !genero || !historia || !imagem) {
                alert("Todos os campos são obrigatórios!");
                return;
            }

            // Lê o arquivo de imagem como URL
            const reader = new FileReader();
            reader.onload = function (event) {
                const historiaData = {
                    titulo,
                    genero,
                    historia,
                    imagem: event.target.result, // URL da imagem
                    data: dataFormatada,
                };

                // Salva no localStorage
                let historias = JSON.parse(localStorage.getItem("historias")) || [];
                const urlParams = new URLSearchParams(window.location.search);
                const tituloEdicao = urlParams.get("titulo");

                if (tituloEdicao) {
                    // Se estiver editando, atualiza a história existente
                    const index = historias.findIndex(h => h.titulo === tituloEdicao);
                    if (index !== -1) {
                        historias[index] = historiaData; // Substitui a história original pela editada
                    }
                } else {
                    // Caso contrário, adiciona uma nova história
                    historias.push(historiaData);
                }

                localStorage.setItem("historias", JSON.stringify(historias));

                alert(tituloEdicao ? `História "${titulo}" atualizada com sucesso!` : `História "${titulo}" publicada com sucesso!`);
                form.reset();
            };

            reader.readAsDataURL(imagem); // Converte a imagem em DataURL
        });
    }

    // Preenche os campos ao editar uma história
    const urlParams = new URLSearchParams(window.location.search);
    const titulo = urlParams.get("titulo");
    const data = urlParams.get("data");
    const imagem = urlParams.get("imagem");
    const texto = urlParams.get("texto");
    const genero = urlParams.get("genero");


     // Preenche os campos do formulário se os dados existirem
     if (titulo) document.getElementById("titulo").value = titulo;
     if (data) document.getElementById("data").value = data;
     if (imagem) {
         const imagemPreview = document.getElementById("imagem-preview");
         if (imagemPreview) {
             imagemPreview.src = imagem; // Exibe a imagem no campo de edição
             imagemPreview.style.display = "block"; // Garante que a imagem seja visível
         }
     }
     if (texto) document.getElementById("historia").value = texto;
     if (genero) document.getElementById("genero").value = genero;
    
    // Renderiza as histórias na página inicial
    const container = document.getElementById("historias-container");
    if (container) {
        let historias = JSON.parse(localStorage.getItem("historias")) || [];
        historias.forEach((historia) => {
            const historiaDiv = document.createElement("div");
            historiaDiv.className = "historia";

            const img = document.createElement("img");
            img.src = historia.imagem; // URL da imagem
            img.alt = `Imagem da história ${historia.titulo}`;
            img.className = "historia-imagem";

            // Adiciona redirecionamento ao clicar na imagem
            img.addEventListener("click", () => {
                window.location.href = `leitura.html?titulo=${encodeURIComponent(historia.titulo)}&data=${encodeURIComponent(historia.data)}&imagem=${encodeURIComponent(historia.imagem)}&texto=${encodeURIComponent(historia.historia)}`;
            });

            const tituloEl = document.createElement("h3");
            tituloEl.textContent = historia.titulo;

            const generoEl = document.createElement("p");
            generoEl.textContent = `Gênero: ${historia.genero}`;

            const dataEl = document.createElement("p");
            dataEl.textContent = `Data: ${historia.data}`;

            historiaDiv.appendChild(img);
            historiaDiv.appendChild(tituloEl);
            historiaDiv.appendChild(generoEl);
            historiaDiv.appendChild(dataEl);
            container.appendChild(historiaDiv);
        });
    }
});
