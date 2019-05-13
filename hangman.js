"use strict";
//Global Variables
//===========================================================
//create array of words. This will be an array of possible answers
const hangmanAnswers = [
  "elephant",
  "gorilla",
  "penguin",
  "horse",
  "giraffe",
  "whale",
  "bear"
];
let stringAnswer;
let count=0;
let wrongCount =0;
// create array for correct guess.
let correctGuessArr = [];



//Main
//============================================================

// Step 1. Randomly select answer from array
const randomNum = Math.floor(Math.random() * hangmanAnswers.length);

//Step 2. Then creata a variable that passes the value of random index number and display word at that index
const randomAnswer = hangmanAnswers[randomNum];
console.log(randomAnswer);

//Step 3. Function to push underscores to array based on length of randomAnswer
let createBlankSpace = () => {
  for (let i = 0; i < randomAnswer.length; i++) {
    correctGuessArr[i]="_";
   
  }
  stringAnswer=correctGuessArr.join(" ");
  document.getElementById('correctguess').innerHTML=stringAnswer
};
createBlankSpace();

let guessArray = [];
function letterGuess(){

    let guess = document.getElementById('letter').value;
    let letter = guess.toLowerCase().trim();
        if (letter.length > 0){
            for (let i=0; i<randomAnswer.length;i++){
                if (randomAnswer[i]===letter)
                {   
                    // let singleLetter = letter.splice(0,-1);
                    console.log(letter);
                    //guessArray.push(singleLetter);
                    correctGuessArr[i]=letter;
                }
        }
        count++;
        console.log(count);
        console.log(guessArray);
        let wrongCount = 8-(count-guessArray.length);
        document.getElementById('counter').innerHTML= count;
        document.getElementById('wrong-counter').innerHTML= wrongCount;
        document.getElementById("correctguess").innerHTML=correctGuessArr.join(" ");

    }
        if ((count-guessArray.length)>7){
        document.getElementById('stat').innerHTML="You've guessed wrong too many times. Game Over!";
    }
}

