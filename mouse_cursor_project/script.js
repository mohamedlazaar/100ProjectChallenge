const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (event)=>{

    mouseCur( event.pageX, event.pageY)
})
const mouseCur = function (pageX, pageY){
    cursor.style.left= pageX + 'px';
    cursor.style.top = pageY + 'px';
}