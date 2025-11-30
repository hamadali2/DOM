const password = document.querySelector(".pass");
const hide = document.querySelector("#hide");

hide.addEventListener("click",(e)=>{
    e.preventDefault();
    if(password.type=="password"){
        password.type="text";
        hide.classList.remove("fa-eye-slash");
        hide.classList.add("fa-eye");
    }else{
        password.type="password";
        hide.classList.remove("fa-eye");
        hide.classList.add("fa-eye-slash");
    }
})