var readlineSync = require('readline-sync');
var userName = readlineSync.question("What is your name?: ");
score = 0;
const chalk = require('chalk');
const que = chalk.bold.blue;
const ans = chalk.keyword('green')
const wro = chalk.keyword('red')
console.log("Hey "+userName+ ", Wecome to quiz on Indian cricket team")
function play(question,answer)
{
  var userAns = readlineSync.question(question);
  if(userAns.toUpperCase() === answer.toUpperCase())
  {
    score = score + 5;
    console.log(ans("Currect answer you got +5 points"));
    console.log("---------------------------------")
  }
  else 
  {
    console.log(wro("Wrong answer"))
  }
}
var questionSet = [
  {
    question : que("1.Who is Indian cricket team captain : \n 1.Virat \n 2.Dhoni \n 3.Rohith \n 4.Shikhar \n"),
    answer : "Virat"
  },
  {
    question :que("2.Who is opener in Indian team\n 1.Rohith \n 2.Bhuvaneshwar \n 3.Kohli \n 4.Dhoni \n "),
    answer : "Rohith"
  },
    {
    question :que("3.Among them who is bowler in Indian team\n 1.Rohith \n 2.Bhuvaneshwar \n 3.Kohli \n 4.Dhoni \n "),
    answer : "Bhuvaneshwar"
  },
    {
    question :que("4.When did India won one-day worldcup\n 1.1995 \n 2.2010 \n 3.2011 \n 4.1999 \n "),
    answer : "2011"
  },
    {
    question :que("5.Who is called the wall in Indian cricket team?\n 1.Rohith \n 2.Bhuvaneshwar \n 3.Dravid \n 4.Dhoni \n "),
    answer : "Dravid"
  },
    {
    question :que("6.Who is coach for Indian cricket team\n 1.Rohith \n 2.Ravi shastry \n 3.Anil kumle\n 4.Shreenivasan \n "),
    answer : "Anil kumble"
  },
  {
    question :que("7.Who leads Mumbai Indians in IPL \n 1.Rohith \n 2.Bhuvaneshwar \n 3.Kohli \n 4.Dhoni \n "),
    answer : "Rohith"
  },
  {
    question :que("8.Who leads RCB in Indian Premier League\n 1.Rohith \n 2.Bhuvaneshwar \n 3.Kohli \n 4.Dhoni \n "),
    answer : "Kohli"
  },
  {
    question :que("9.Who won man of the match in 2011 worldcup \n 1.Rohith \n 2.Bhuvaneshwar \n 3.Yuvraj \n 4.Dhoni \n "),
    answer : "Dhoni"
  },

]
for(var i = 0;i<questionSet.length; i++)
{
  var currentSet = questionSet[i]
  play(currentSet.question,currentSet.answer)
}
console.log("Congratulations!! Your score is",score)
if(score > 30)
{
  console.log("New High score!! Send me a screenshot to update")
}
 var scoreBoard = [
   {
     name : "Ananth",
     scores : 40
   },
   {
     name : "Sam",
     scores : 30
   }
 ]
 console.log("High score\n---------------------------------")
 for (j=0;j<scoreBoard.length;j++)
 {
  
   console.log("Name :" ,scoreBoard[j].name)
   console.log("Score :" ,scoreBoard[j].scores)

 }