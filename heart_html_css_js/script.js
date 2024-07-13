const grayHeart = document.querySelector(".heart-gray");
const redHeart = document.querySelector(".heart-red");

grayHeart.addEventListener('click', ()=>{
    redHeart.classList.add("animation");
    grayHeart.classList.add("fill-color")
})
redHeart.addEventListener('click', ()=>{
    redHeart.classList.remove("animation");
    grayHeart.classList.remove("fill-color")
})