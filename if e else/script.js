// if e else
// var hora = new Date().getHours();

//     if (hora < 12) {
//         alert("bom dia");
//     } else if (hora < 18) {
//         alert('Boa tarde');        
//     } else {
//         alert("boa noite");
//     }

function verificar() {
    let nome = document.getElementById("nome").value;
    let p = document.getElementById("teste");
    
    if (nome == "" || nome == null) {
        p.innerHTML = "campo vazio";
        p.style.color = "red"
    } else {
        p.innerHTML = "campo preenchido";
        p.style.color = "green";
    }

}