console.log("ContentScript injetado!")

chrome.runtime.onMessage.addListener(gotMessage);

async function gotMessage(message, sender, sendResponse){
    main = document.querySelector("#main"),
    textarea = main.querySelector(`div[contenteditable="true"]`)
    if(!textarea) throw new Error("Não há uma conversa aberta")
    textarea.textContent = message.txt
    textarea.dispatchEvent(new InputEvent("input", { bubbles: true }));
    (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click()
}

var s = document.createElement('script');
s.src = chrome.runtime.getURL('scripts/mainScript.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
