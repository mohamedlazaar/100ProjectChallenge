const btn = document.querySelector('.btn_container')
const closeBtn = document.querySelector('.close-icon')
const video_container = document.querySelector('.video_container')
const video = document.querySelector('.video_container iframe')
btn.addEventListener('click', ()=>{
    video_container.classList.remove('active')
})
closeBtn.addEventListener('click', ()=>{
    video_container.classList.add('active')

})