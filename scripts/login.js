var btnSend = document.getElementById("send-button");

btnSend.addEventListener("click", enviar);


function enviar(){
    
    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let msg = {
            txt: "Olá! Não estamos atendendo no momento. Nos chama amanhã, as oito e sete!"
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}
