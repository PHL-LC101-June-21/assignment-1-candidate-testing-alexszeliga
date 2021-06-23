const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName ="";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];
let candidateAnswers= [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What's your name? ");
}

function askQuestion(index) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //console.log
  console.log(questions[index]);
  candidateAnswers[index] = input.question("Your answer? ");
  console.log("Correct answer: " + correctAnswers[index]);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade;
  let correctCount = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    let guess = candidateAnswers[i].toUpperCase();
    let answer = correctAnswers[i].toUpperCase();
    if (guess === answer) {
      correctCount++;
    }
  }
  
  grade = (correctCount / correctAnswers.length) * 100;

  return Number(grade);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello, ${candidateName}`);
  for (let i = 0; i < questions.length; i++) {
    askQuestion(i);
  }
  let grade = gradeQuiz(this.candidateAnswers);
  if (grade >= 0.8) {
    console.log(`You passed. Your score is ${(grade) + "%"}`);
  } else {
    console.log(`Sorry, please try again, your score (${(grade) + "%"}) was below our minimum threshold`);
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};