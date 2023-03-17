const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const passwordRegex = /^[A-Za-z0-9]\w{8,}$/;
const emailInput = document.getElementById("email");
const emailRegex = /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/gm;


loginBtn.addEventListener("click", (e) => {
  e.preventDefault();

  
if(passwordRegex.test(passwordInput.value) && emailRegex.test(emailInput.value)) {
      alert("Logado");
}
else if(!emailRegex.test(emailInput.value)){
        emailInput.style.border = "2px solid red";    
} 
else if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.style.border = "2px solid red";
    }

    console.log(emailRegex.test(emailInput.value));
    console.log(passwordRegex.test(passwordInput.value));
});

emailInput.addEventListener("click", () => {
    emailInput.style.border = "none"
});

passwordInput.addEventListener("click", () => {
    passwordInput.style.border = "none"
})