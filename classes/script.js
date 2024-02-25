class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzinou: biiiiiiiiiiiii";
    }
} 

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volks", "Gol", 2012);

console.log(uno.buzina());

/*
// forma básica de se construir um obejto
const carro = {
    marca: "fiat",
    modelo: "uno",
    ano: 1999,

    apresentar: function() {
        let propriedades = "";
        for (let chave in this) {
            if (typeof this[chave] !== "function") {
                propriedades += this[chave] + " - ";
            }
        }
        const testeElement = document.getElementById("teste");
        testeElement.innerHTML = propriedades.slice(0, -3);
    }
}

carro.apresentar();
*/


// document.getElementById("teste").innerHTML = superlista.join(" - ");
