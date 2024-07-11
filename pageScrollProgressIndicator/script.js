let progress_indicator = document.querySelector('.scoll_indicator .progress')
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
console.log(scrollHeight)
window.addEventListener('scroll', scroll);  
function scroll() {
    let scroll_position = document.documentElement.scrollTop;
    let scroll_percent = (scroll_position / scrollHeight) * 100;
    progress_indicator.style.width = `${scroll_percent}%`;
}