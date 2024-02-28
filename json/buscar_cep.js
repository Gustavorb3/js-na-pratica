//BUSCAR CEP - VIA CEP

let p = document.getElementById("texto");

function buscar_cep() {
    let input = document.getElementById("cep").value;

    const ajax = new XMLHttpRequest(); 
    ajax.open ('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function() {
        p.innerHTML = this.responseText;

    // Transformar o texto em objeto
        let obj = JSON.parse(this.responseText);

    // Pegar os valores que eu quero
        let rua = obj.logradouro;
        let bairro = obj.bairro;
        let cidade = obj.localidade;

        p.innerHTML = "Logradouro: " + rua + "<br>Bairro: " + bairro + "<br> Cidade: " + cidade;
    }
}