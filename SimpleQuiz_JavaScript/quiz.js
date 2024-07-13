function checkAnswer() {
    // Function body

    const correctAnswer= "4";
    let userAnswer = document.querySelector('input[name="quiz"]:checked').value;   

    if (userAnswer === correctAnswer){
        
        document.getElementById('feedback').textContent = "Correct! Well done.";
    }else{
        document.getElementById('feedback').textContent ="That's incorrect. Try again!"
    }
}

let btn = document.getElementById('submit-answer');
btn.addEventListener('click', checkAnswer)
