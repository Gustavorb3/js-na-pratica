document.getElementById("meubotao").addEventListener("click", function() {
    alert('voce clicou no botao');
});

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraVerde() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "green";
}

function viraRosa() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "pink";
}

function adicionatexto() {
    let p = document.getElementById("texto");
    p.append('o mouse moveu<br>');
}

