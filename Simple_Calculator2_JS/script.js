const calcBtn = document.querySelector('#calculate')
calcBtn.addEventListener('click',()=>{
    const num1 = Number(document.querySelector('#firstnumber').value)
    const num2 = Number(document.querySelector('#secondnumber').value)
    const results = document.querySelector('.results');
    let operator = document.querySelector("#Selectoperator").value;
    switch(operator){
        case'plus':
        results.innerHTML = num1 + num2;
        break;
        case'minus':
        results.innerHTML = num1 - num2;
        break;
        case'multiply':
        results.innerHTML = num1 * num2;
        break;
        case'divide':
        results.innerHTML = num1 / num2;
        break;
        default:
        results.innerHTML = 'Please select an operator';
    }

})