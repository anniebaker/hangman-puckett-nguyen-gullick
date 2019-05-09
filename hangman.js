'use strict'

//Answer
let answer = ["E", "L", "E", "P", "H", "A", "N", "T"];

//Click one letter

//Feedback: is the letter in the answer array?


//if the letter is in the word, push it to every instance
function checkGuess() {
    let guess = document.getElementById("letter").value;
    console.log(guess);
for(let i = 0; i < answer.length; i++) {
    if(answer[i] === guess){
        console.log("working 2");
        document.getElementById("correct").innerHTML = guess;
        }
    }
}

//if its not in the word, lose a life

//if lives = 0, game over

//if all letters correct and lives dont = 0, you win!







//HTML divs with h3 tags with individual ids CSS: border bottom