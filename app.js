const botaoPesquisa = document.getElementById('botao-pesquisa');

document.addEventListener('keypress', function (event) { // Se alguma tecla for pressionada, executa a função "event"
    if (event.key === 'Enter') { // Se a tecla enter for pressionada
        botaoPesquisa.click(); // Simula um clique no botão
    }
});

function pesquisar() { // Função que será executada quando o botão de pesquisar for clicado
    let section = document.getElementById("resultado"); // Pega a seção "resultado" do HTML pelo ID

    let campoPesquisa = document.getElementById("campo-pesquisa").value; // Pega o input "campo-pesquisa" no HTML pelo ID

    let resultados = "";
    let nome = "";
    let tags = "";

    if (campoPesquisa.trim() === "") { // Se não houver nada escrito
        section.innerHTML = `
            <div class="item-resultado nomevalido">
                <h2>Digite o nome de uma planta</h2>
            </div>
        `
        return
    };

    campoPesquisa = campoPesquisa.toLowerCase();

    // Para cada dado dentro da lista de dados
    for (let dado of dados) {
        nome = dado.nome.toLowerCase();
        tags = dado.tags.toLowerCase();

        if (nome.includes(campoPesquisa) || tags.includes(campoPesquisa)) { // Se o nome ou a tag são iguais a pesquisa
            // Cria um novo elemento HTML
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.nome}</h2>
                    <p>${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Mais Informações</a>
                </div>
            `
        };
    };

    if (!resultados) { // Se a variável "resultados" estiver vazia
        resultados = `
            <div class="item-resultado nomevalido">
                <h2>Digite um nome válido</h2>
            </div>
        `
    }
    section.innerHTML = resultados; // Adiciona na página HTML a variável "resultados"
}