let loginBox = document.getElementById("LoginBox");
let regBox = document.getElementById("RegBox");
let indicator = document.getElementById("Indicator");

function register(){
    regBox.style.transform = "translateX(0px)";
    loginBox.style.transform = "translateX(0px)";
}

function logIn(){
    regBox.style.transform = "translateX(300px)";
    loginBox.style.transform = "translateX(300px)";
}
