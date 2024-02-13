/* Vamos entender Operadores:
-> Os operadores JavaScript são usados para atribuir valores, comparar
valores, executar operações aritméticas e muito mais.

São os sinais que usamos: + - * / = ++ -- += -=/ && || != == etc...

São separados em 6 "categorias":
1) Operadores Aritméticos (matemáticos): + - * /
2) Operadores de Atribuição: = +=
3) Operadores de Sequência: +
4) Operadores de Comparação: == != true or false
5) Operador Condicional (Ternário): && ||
var idade, eleitor;

idade = 17
eleitor = (idade<18) ? "não eleitor":"eleitor"

alert("a resposta é: " + eleitor + "a idade dele é de: " + idade + " aninhos")
6) Operadores Lógicos:

*/

var idade, eleitor, resultado;

idade = 67
eleitor = (idade<18) ? "não eleitor":"eleitor"
resultado = !(idade == 65)


alert(resultado)
