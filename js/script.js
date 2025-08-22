let count = 1
document.getElementById("radio1").checked = true;
setInterval(function () {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}

//1 - Usuário clica no botão whatsApp - executa função showMenssager
const showMenssager = () => {
    var divMenssager = document.getElementById('wpp-msg');
    var propDisplay = window.getComputedStyle(divMenssager).display;
    //2 - Verifica se propriedade display tem valor 'none' element.style.dislay
    if (propDisplay == 'none') {
        //3 - Se valor for 'none' modifica para 'block'
        divMenssager.style.display = 'block';
    } else {
        //4 - Caso contrário, modifica para 'none
        divMenssager.style.display = 'none'
    }
    //o termo divMensage é pra simplificar e escrever menos

}


//Enviar mensgem para um numero de wpp
const enviarmsg = () => {
    const numero = 5512997606022;

    const mensagem = document.getElementById('msg').value;

    // aumentar segurança
    const msgCodificada = encodeURIComponent(mensagem)

    //Evita o envio se a caixa de texto estiver vazia
    if (!mensagem.trim()) {
        alert('Por favor, digite uma mensagem!');
        //Intorrompe a ação
        return;
    }

    //concatenação antiga > const url = 'https://wa.me./' + numero + '?' + msgCodificada;
    //interpolação de váriaveis, mais moderna >
    const url = `https://wa.me/${numero}?${msgCodificada}`;
    //Abre a URL do wpp com os parametros passados
    window.open(url, '_blank');
}

const form = document.querySelector(".search-bar");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // impede recarregar a página
    alert("A pesquisa ainda não está habilitada. 🚧");
});

document.addEventListener("DOMContentLoaded", function() {
  const botoesCarrinho = document.querySelectorAll(".bcar");

  botoesCarrinho.forEach(botao => {
    botao.addEventListener("click", function(event) {
      event.preventDefault(); // impede ação real
      alert("O carrinho ainda não está habilitado. 🚧");
    });
  });
});