"use strict";

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

// create array for correct guess.
const correctGuessArr = [];
//create array for correct guess.
const incorrectGuessArr= [];
//create spaces to represent randomly chosen answer word length
const blankSpaces = [];

// Step 1. Randomly select answer from array
    //first randomly selects index number in array
    const randomNum = Math.floor(Math.random() * hangmanAnswers.length);

//Step 2. Then creata a variable that passes the value of random index number and display word at that index
    const randomAnswer = hangmanAnswers[randomNum];
    console.log(randomAnswer);

//Step 3. Function to push underscores to blankSpaces array based on length of randomAnswer
let createBlankSpace = () => {
  for (let i = 0; i < randomAnswer.length; i++) {
    blankSpaces.push("_");
  }
  document.getElementById("underscore").innerHTML = blankSpaces;
  return blankSpaces;
};
createBlankSpace();


// Step 4. get users guess using keypress as event
    document.addEventListener("keypress", (event) => {

    //first will output number i.e. keyCode associated with letters on keyboard
    //then will use String.fromCharCode to convert keyCode number to letter
        let keyWord = String.fromCharCode(event.keyCode);
        console.log(keyWord);
        console.log(randomAnswer.indexOf(keyWord));

    //if letter exists in randomAnswer then it will return index number
        //return of -1 means letter is not present in randomAnswer i.e. false
     if (randomAnswer.indexOf(keyWord)>-1){
        return true;

     } else return false;

    });

// Push correct letter guess to this correctGuessArr

//Push to index spaces where letter matches CorrectGuessArr
//Push incorrect letters guess to this wrongGuessArr
    //Then display all letters in wrongGuessArr



//FIRST DRAFT IS BELOW THIS COMMENT 
//Answer
// let answer = ["E", "L", "E", "P", "H", "A", "N", "T"];

//Click one letter

//Feedback: is the letter in the answer array?

//if the letter is in the word, push it to every instance
// function checkGuess() {
//     let guess = document.getElementById("letter").value;
//     console.log(guess);
// for(let i = 0; i < answer.length; i++) {
//     if(answer[i] === guess){
//         console.log("working 2");
//         document.getElementById("correct").innerHTML = guess;
//         }
//     }
// }

//if its not in the word, lose a life

//if lives = 0, game over

//if all letters correct and lives dont = 0, you win!

//HTML divs with h3 tags with individual ids CSS: border bottom
