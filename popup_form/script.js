const form_container = document.querySelector('.form_container');
const signup = document.querySelector('#signup');
const close = document.querySelector('.close');

signup.addEventListener('click', (e)=>{
    e.preventDefault();
    form_container.classList.add('show');
})
close.addEventListener('click', (e)=>{

    e.preventDefault(); 
    form_container.classList.remove('show');
})
window.addEventListener('click', (e)=>{
    if(e.target === form_container){
        form_container.classList.remove('show');
    }
})