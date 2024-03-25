let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista")

function addTarefa() {
    // pegar o valor digitado no input
    let valorInput = input.value;

    // se o input não for vazio, nulo e indefinido
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {
        let novoItem = `<div class="item">
        <div class="item-icone">
            <span class="mdi mdi-circle-outline"></span>
        </div>
        <div class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button class="delete"><span class="mdi mdi-delete"></span>Deletar</button>
        </div>`

        main.innerHTML += novoItem;
        input.value = "";
        
    }
}