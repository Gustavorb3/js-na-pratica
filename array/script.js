                //0          //1        //2         //3         //4     //5
const lista = ["monitor","teclado","gabinete","placa de video","ram","cooler"];
const peças = ["carregador","futemax","memoria","water cooler"];

const superlista = lista.concat(peças) //junta as duas matrizes lista/peças

lista.shift("bonitao")

document.getElementById("teste").innerHTML = superlista.join(" - ");