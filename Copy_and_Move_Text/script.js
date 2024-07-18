//copy text
const copyText = document.querySelector('.copyText');
//move text
const moveText = document.querySelector('.moveText');
//copy button
const copyBtn = document.querySelector('.copyBtn');
//move button
const moveBtn = document.querySelector('.moveBtn');
// outupt
const output = document.querySelector('.output');

copyBtn.addEventListener('click', ()=>{
    let textcopied = copyText.value;
    copyToClipB(textcopied);
})
moveBtn.addEventListener('click', ()=>{
    let textcopied = copyText.value;
    moveText.value = textcopied;
})
copyText.addEventListener('click', ()=>this.select())
moveText.addEventListener('click', ()=>this.select())

function copyToClipB(str){
    const outputContainer = document.querySelector('.move-container')
    const textarea = document.createElement('textarea')
    textarea.value = str
    outputContainer.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    outputContainer.removeChild(textarea)
    output.innerHTML = '<h3>Copied!</h3>'
    output.classList.add('add')
    setTimeout(() => {
        output.classList.toggle('add')
        output.textContent= ''
        }, 2000);



}