var readlineSync = require("readline-sync");

const checkAnswer = ({question, answer})=>{
  var userInput = readlineSync.question(question);
  return (userInput===answer);
}

questions = [
  {
    question: "Where does Harry have his lightning bolt scar?",
    answer: "Forehead"
  },
  {
    question: "What is Harry's favorite spell?",
    answer: "expelliarmus"
  },
  {
    question: "Is Snape a snake?",
    answer: "Duh"
  },
  {
    question: "Is Dobby a free elf?",
    answer: "Yes!"
  },
  {
    question: "What house was Cedric Diggory in?",
    answer: "HUfflepuff"
  },
  {
    question: "What is McGonagall's animagus?",
    answer: "A cat"
  },  
  {
    question: "How many Marauderers were there?",
    answer: "Four"
  },
  {
    question: "Who does Dumbledore call brave for standing up to his friends in \"The Socerer's Stone\"?",
    answer: "Neville"
  },
  {
    question: "Who is the owner of the ELder Wand?",
    answer: "Harry Potter"
  },
  {
    question: "After All this time?",
    answer: "Shut up"
  }
]

console.log(questions.length);

console.log("Let's test your basic Harry Potter Knowledge")

var score = 0;
questions.forEach((q)=>{
  if(checkAnswer(q)){
    score++;
    console.log("Right answer!")
  }
  else console.log("Wrong answer");
  console.log("Current score: "+score);
})
console.log("Final score: "+score);
