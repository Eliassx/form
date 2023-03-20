const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;
const emailInput = document.getElementById("email");
const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;
const loginWidth = document.getElementsByClassName('login-with');


loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  
    if(passwordRegex.test(passwordInput.value) == true && emailRegex.test(emailInput.value) == true) {
        alert("Logado");

    }
    else if(passwordRegex.test(passwordInput.value) == false && emailRegex.test(emailInput.value) == false) {
        passwordInput.style.border = "2px solid red";
        emailInput.style.border = "2px solid red";

        document.getElementById('msg-password').innerHTML = `*Digite sua senha!`
        document.getElementById('msg-email').innerHTML = `*Digite seu email!`

    }
    else if (passwordRegex.test(passwordInput.value) == false) {
        passwordInput.style.border = "2px solid red";
        document.getElementById('msg-password').innerHTML = `*Digite sua senha correta!`
    }
    else if(emailRegex.test(emailInput.value) == false){
        emailInput.style.border = "2px solid red";
        document.getElementById('msg-email').innerHTML = `*Digite seu E-mail corretamente!`
    } 

    console.log(emailRegex.test(emailInput.value));
    console.log(passwordRegex.test(passwordInput.value));
});

emailInput.addEventListener("click", () => {
    emailInput.style.border = "none"
    emailInput.value = ""
    document.getElementById('msg-email').innerHTML = ""
    document.getElementById('msg-password').innerHTML = ""
});

passwordInput.addEventListener("click", () => {
    passwordInput.style.border = "none"
    passwordInput.value = ""
    document.getElementById('msg-password').innerHTML = ""
})