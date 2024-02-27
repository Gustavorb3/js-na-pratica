/** MANIPULAR DATAS EM JS */

let p = document.getElementById("teste");

 // Comando base para mostrar a data
 let data = new Date();
 p.innerHTML = data

// Comando base para mostrar o ano
 let ano = data.getFullYear();
 p.innerHTML = ano

// Mostrar o mês - de 0 até 11 sendo 0 janeiro
 let mes = data.getMonth();
 p.innerHTML = mes

// Mostrar mês escrito - ARRAY
 const mes_ano = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
 let mes_escrito = mes_ano [data.getMonth()];
 p.innerHTML = mes_escrito

// Mostrar dia do mês - 1 até 31
 let dia_mes = data.getDate();
 p.innerHTML = dia_mes

// Mostrar dia da semana - 0 até 6 
 let dia_semana = data.getDay();
 p.innerHTML = dia_semana

 const dias_da_semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
 let dia_escrito = dias_da_semana[data.getDay()];
 p.innerHTML = dia_escrito

// Mostrar horas - 0 até 23
 let horas = data.getHours();
 p.innerHTML = horas

// Mostrar minutos - 0 até 59
 let minutos = data.getMinutes();
 p.innerHTML = (horas + ":" + minutos)

// Mostrar segundos - 0 até 59
 let segundos = data.getSeconds();
 p.innerHTML = (horas + ":" + minutos + ":" + segundos)

// Mostar milisegundos - 0 até 999
 let milisegundos = data.getMilliseconds();
 p.innerHTML = milisegundos

// // Mostrar data no padrão brasileiro - DIA / MÊS / ANO
 let dataBR = data.toLocaleString('pt-br', {dateStyle: 'short'}); //caso queira mostrar somente a hora, troca dateStyle por timeStyle
 p.innerHTML = dataBR

// Pegar os valores separadamente
 d = new Date();
 diaMes = d.getDate();
 mes = d.getMonth() + 1;
 ano = d.getFullYear();

 function addZero(x) {return x < 10 ? '0' + x : + x};

 let = dataPadraoBR = addZero(diaMes) + "/" + addZero(mes) + "/" + (ano);
 p.innerHTML = dataPadraoBR;

// Comparar datas - Maior ou Menor EX: Vencimento
 var hoje = new Date();
 var vencimento = new Date(2024, 1, 30);

 if (hoje > vencimento) {
     p.innerHTML = ("Venceu meu cupanheiro");
 } else {
     p.innerHTML = ("tudo nos conformes \u{1F60E}")
 }

// Diferença entre duas datas em dias
 var data_inicial = new Date();
 var data_final = new Date(2024, 11, 31);

 var diferenca_tempo = data_final.getTime() - data_inicial.getTime();

 var diferenca_dias = Math.ceil(diferenca_tempo / (24 * 60 * 60 * 1000));

 p.innerHTML = diferenca_dias