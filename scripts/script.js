var btnLogin = document.getElementById("form-login-button");
var usernameInput = document.getElementById("form-username");
var passwordInput = document.getElementById("form-password");
var usernameWarning = document.getElementById("warning-username");
var passwordWarning = document.getElementById("warning-password");

btnLogin.addEventListener("click", checkFormInput);

function checkFormInput(e){
    e.preventDefault();

    const name = document.querySelector("#form-username");
    const username = name.value;

    const pass = document.querySelector("#form-password");
    const password = pass.value;

    if(!password && !username){
        usernameWarning.style.display = "inline";
        passwordWarning.style.display = "inline";
        return 0;
    }
    
    if(!username){
        usernameWarning.style.display = "block";
        passwordWarning.style.display = "none";
        return 0;
    }

    if(!password){
        passwordWarning.style.display = "inline";
        usernameWarning.style.display = "none";
        return 0;
    }

    if(username == "admin" && password == "admin"){
        window.location.href = "login.html";
        return 0
    }

    if(password && username){
        passwordWarning.style.display = "none";
        usernameWarning.style.display = "none";
    }

    }