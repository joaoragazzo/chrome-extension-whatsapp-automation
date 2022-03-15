var btnLogin = document.getElementById("form-login-button");
var usernameInput = document.getElementById("form-username");
var passwordInput = document.getElementById("form-password");

btnLogin.addEventListener("click", checkFormInput);

function checkFormInput(e){
    e.preventDefault();

    const name = document.querySelector("#form-username");
    const value = name.value;

    if(!value){
        alert("Nao pode ficar vazio nao irmao")
    }

    }