/*
SET.TIMEOUT
function ativar_contagem() {
    document.getElementById("tempo").innerHTML  = "cumeçou";

    //ativa a função apenas 1 uma vez quando der o tempo especificado
    tempo = setTimeout(function() {
        document.body.style.backgroundColor = "black";
    }, 5000);
}

function parar_contagem() {
    clearTimeout(tempo)
    document.getElementById("tempo").innerHTML = "paro sô"
}
*/

// SET.INTERVAL

function ativar_contagem() {
    tempo = setInterval(function() {
        var cronometro = document.getElementById("tempo").innerHTML;
        var soma = parseInt(cronometro) - 1;

        if (soma===0) {
            document.getElementById("tempo").innerHTML = "Tempo esgotado";
            parar_contagem()
        } else {
            document.getElementById("tempo").innerHTML = soma;
        }
    }, 1000)
}

function parar_contagem() {
    // parar contagem
    clearInterval(tempo);
}