let bgToggler = document.getElementById('switch');

bgToggler.addEventListener('click', ()=>{
    if(bgToggler.checked === true){
        document.body.style.backgroundColor = 'black';
    }
    else{
        document.body.style.backgroundColor = 'white';
    }
})