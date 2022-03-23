var btnAwnsers = document.getElementById("awnsers-button");
var btnAdd = document.getElementById("add-button");
var btnInfo = document.getElementById("info-button");
var btnConfig = document.getElementById("config-button");

btnAwnsers.addEventListener("click", awnsersPage)
btnAdd.addEventListener("click", addPage)
btnInfo.addEventListener("click", infoPage)

function awnsersPage(){
    window.location.href = "login.html";
    return 0
}

function addPage(){
    window.location.href = "adicionar.html";
    return 0
}

function infoPage(){
    window.location.href = "info.html";
    return 0
}
