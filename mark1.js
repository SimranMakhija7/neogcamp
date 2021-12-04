var readlineSync = require("readline-sync");

const checkAnswer = ({question, answer})=>{
  var userInput = readlineSync.question(question);
  return (userInput===answer);
}

questions = [
  {
    question: "What is my favorite song?",
    answer: "Nothing"
  },
  {
    question: "What do I like to do in my free time?",
    answer: "Read books"
  },
  {
    question: "What is my favorite Marvel movie?",
    answer: "none"
  },
  {
    question: "What is my favorite TV show of all time?",
    answer: "Sherlock"
  },
  {
    question: "How many (human spoken) languages can I write in?",
    answer: "four"
  }
]

console.log("You think you know me? Let's put that to test")

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
