                //0          //1        //2         //3         //4     //5
// const lista = ["monitor","teclado","gabinete","placa de video","ram","cooler"];
// const peças = ["carregador","futemax","memoria","water cooler"];

// const superlista = lista.concat(peças) //junta as duas matrizes lista/peças


const numeros = [40,50,25,78,14,23,9];

//slice = fatiar a matriz no intervalo de posições
// const craques = jogadores.slice(2,6);

numeros.sort(function (a,b) {return a - b} );

// //mostrar numeros maiores que 20
// const maior20 = numeros.filter(filtragem);

// function filtragem (value, index, array) {
//     return value > 20
// }

document.getElementById("teste").innerHTML = numeros;