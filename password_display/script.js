const eyeBtn = document.querySelector('.eye-container');
const eye = document.querySelector('.eye');
const password = document.querySelector('.password');

eyeBtn.addEventListener('click', ()=>{
    if(password.type === "password"){
        password.type = "text";
        eye.classList.add('active');
    }else{
        password.type = "password";
        eye.classList.remove('active');
    }
})