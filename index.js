var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name? : ")
score = 0;
console.log('Hey ' +userName+ ', Welome to "Do you know Ananth?"');
function play(question,answer)
{
  var userAns = readlineSync.question(question);
  if(answer === userAns)
  {
    score = score + 5;
    console.log("You are right you got +5 point");
  }
  else
  {
    console.log("You are wrong")
  }
}
var questionSet = [
  {
    question : "Where is he from?",
    answer : "Mangalore"
  },
  {
    question : "Where he works at?",
    answer : "Infosys"
  },
  {
    question : "Which food he likes the most?",
    answer : "fastfood"
  }
];
for (var i = 0; i < questionSet.length; i++)
{
  var currentQuestion = questionSet[i]
  play(currentQuestion.question,currentQuestion.answer)
}
console.log("Your score is",score)


function scoref(scores)
{
  if(score > scores)
  {
    console.log("Congratulations !! New high send me the screenshot to update")
  }
}
var scoreBoard = [
  {
    name : "Ananth",
    scores : 10
  },
  {
    name : "Sam",
    scores : 9
  }
]
for(var j = 0;j < scoreBoard.length; j++)
{
  var scoreCard = scoreBoard[j];
  scoref(scoreBoard.scores)
}