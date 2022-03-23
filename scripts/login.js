var btnSend = document.getElementById("send-button");

btnSend.addEventListener("click", teste);

function teste(){
    
    let params = {
        active: true,
        currentWindow: true
    }

    chrome.tabs.query(params, gotTabs);

    function gotTabs(tabs) {
        let msg = {
            txt: "hello world!"
        }
        chrome.tabs.sendMessage(tabs[0].id, msg);
    }
}