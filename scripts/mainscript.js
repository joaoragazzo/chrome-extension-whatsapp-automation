console.log("script carregado")

var btnSend = document.getElementById("send-button");
var textBox = document.querySelector("#main > footer > div._2BU3P.tm2tP.copyable-area > div > span:nth-child(2) > div > div._2lMWa > div.p3_M1 > div > div._13NKt.copyable-text.selectable-text");
btnSend.addEventListener("click", enviarMensagem);

function enviarMensagem(e){
    console.log("foi tentado")
    e.preventDefault();

    textBox.value="funcionou";

}