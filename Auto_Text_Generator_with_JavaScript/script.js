const typedText = document.querySelector('.typed_text');
const cursor = document.querySelector('.cursor');
let words = ['Awesome', 'Cool', 'Life', 'Famous'];
let wordIndex = 0;
let letterIndex = 0;
let typingSpeed = 200;
let deletingSpeed = 200;
let newLetterDelay = 1000;

document.addEventListener('DOMContentLoaded', () => {
  // Clear any existing text before starting
  typedText.textContent = '';
  setTimeout(type, newLetterDelay);
});

function type() {
  if (letterIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, newLetterDelay);
  }
}

function erase() {
  if (letterIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, letterIndex - 1);
    letterIndex--;
    setTimeout(erase, deletingSpeed);
  } else {
    wordIndex++;
    if (wordIndex >= words.length) {
      wordIndex = 0;
    }
    setTimeout(type, typingSpeed + 1000);
  }
}