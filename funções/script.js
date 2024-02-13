// FUNÇÃO SOMA
function soma (soma1, soma2) {
    return(soma1 + soma2)
}

// FUNÇÃO CONVERSÃO
function cotacao (real, realpdolar) {
    return(real * realpdolar)
}

// CHAMANDO A FUNÇÃO COM ONCLICK
function alertRelou() {
    alert("eai ze da manga")
}

// FUNÇÃO CELSIUS
function celsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

var x = celsius(77);
alert("a temperadura é de " + x + " graus");

var valorReal = (7);
var valorDolar = (3);
    
var total = cotacao(valorReal, valorDolar)

// alert("o valor em real é R$: " + valorReal + ", o valor em dolar é U$: " + valorDolar + " e o total é U$: " + total)