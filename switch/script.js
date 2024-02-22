function verifica_cor() {
    let cor = document.getElementById("cor").value;
    let p = document.getElementById("teste");
    cor = cor.toLowerCase()

    switch (cor) {
        case "azul":
            // o que acontece
            document.body.style.backgroundColor = "blue";
            break;
        case "vermelho":
            // o que acontece
            document.body.style.backgroundColor = "red";
            break;
        case "amarelo":
            // o que acontece
            document.body.style.backgroundColor = "yellow";
            break;
        default:
            // o que acontece
            document.body.style.backgroundColor = "white"
            p.innerHTML = ("não foi possível encontrar a cor " + cor);
            break;
    }

    // let x = "0"

    // switch (x) {
    //     case "":
    //         // o que acontece
    //         p.innerHTML = "a variavel é zero";
    //         break;
    //     default:
    //         // o que acontece
    //         p.innerHTML = ("não foi possível encontrar a variavel");
    //         break;
    // }

}

function dia_da_semana() {
    var dia = new Date().getDay();
    let p = document.getElementById("teste");

    switch (dia) {
        case 0:
            // o que acontece
            p.innerHTML = "Domingo";
            break;
        case 1:
            // o que acontece
            p.innerHTML = "Segunda ainda amigão";
            break;
        case 2:
            // o que acontece
            p.innerHTML = "terça ainda";
            break;
        case 3:
            // o que acontece
            p.innerHTML = "tá chegando";
            break;
        case 4:
            // o que acontece
            p.innerHTML = "já pode sextar?";
            break;
        case 5:
            // o que aconte
            p.innerHTML = "SEXXXXTOOOUUU";
            break;
        case 6:
            // o que acontece
            p.innerHTML = "chama chuva";
            break;
    }
}