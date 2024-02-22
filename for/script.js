// for (let i = 0; i <10001; i++) {
//     document.getElementById("teste").innerHTML += i + ", ";
// }

// let ano = new Date().getFullYear();

// for (let i = ano; i >= 1900; i--) {
//     document.getElementById("ano").innerHTML += "<option value='" + i + "'>" + i + "</option>";
// }

const carros = ["gol", "fusca", "brasilia", "dellrey", "chevete"];
var tamanho =  carros.length;

for (let i = 0; i < tamanho; i++) {
    document.getElementById("teste").innerHTML += carros [i] + " - ";
}