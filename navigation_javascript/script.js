const navToggle = document.querySelector('#toggle');
const navigation = document.querySelector('.navigation');

navToggle.addEventListener('click', ()=>{
    navigation.classList.toggle('active');
})