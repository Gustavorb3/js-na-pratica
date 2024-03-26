let contador = 0;  
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista")

function addTarefa() {
    // pegar o valor digitado no input
    let valorInput = input.value;

    // se o input não for vazio, nulo e indefinido
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span id="icone_${contador}" class="mdi mdi-circle-outline"></span>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">Deletar</button>
        </div>
        </div>`

        // adicionar novo item ao main
        main.innerHTML += novoItem;

        // zera o input após adicionar a tarefa
        input.value = "";

        // focar o cursor no campo input após adicionar a tarefa
        input.focus();

    }
}

// deletar tarefa
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

// marcar tarefa
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe =  item.getAttribute('class');

    if (classe == "item") {
        item.classList.add('feito');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

        item.parentNode.appendChild(item);
    } else {
        item.classList.remove('feito');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}

// usar o enter para adicionar a tarefa
input.addEventListener("keyup", function(event) {
    // se teclar no enter (13)
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})