var readlineSync = require("readline-sync");

var score =0;
var userName = readlineSync.question("What's your name? ");
console.log("Welcome " +userName + " How much do you know about Taruni? ");

function play(question, answer)
{
  var userName = readlineSync.question(question);
  
  if(userName == answer)
  {
    console.log("Right!");
    score++;
  }
  else
  {
    console.log("Wrong!");
  }
  console.log("your current score is " +score);
  console.log("____________________");
}
var questions = [
  {
    question:'What is fav color of Taruni?\na)Black\nb)blue\n',
    answer: "a",
  },
  {
    question: 'Who is fav hero of Taruni?\na)Mahesh babu\nb)Prabhas\n',
    answer: "a",
  },
  {
    question: 'When is her birthday?\na)March 4th\nb)August 9th\n',
    answer: "a",
  },
  {
    question: 'Where does she live?\na)Banglore\nb)Hyderabad\n',
    answer: "b",
  },
  {
    question: 'What is her fav movie?\na)forrest gump\nb)interstellar\n',
    answer: "a"
  },
  {
    question: 'How many siblings does she have?\na)0\nb)1\n',
    answer: "b",
  },
  {
    question: 'Which type of food does she like?\na)veg\nb)non-veg\n',
    answer: "b"
  },
  {
    question: 'What is her fav destination?\na)Paris\nb)Maldives\n',
    answer: "b",
  }
]

for(var i=0; i<questions.length; i++)
{
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer)
  
}
 console.log("your final score is " +score);
if(score >= 5)
 {
   console.log("The Maximum score is 8 and your score is " +score + " WOW " +userName +"!!You know a lot about her!")
 }
 else
 {
   console.log("The Maximum score is 8 and your score is " +score + " I think you dont know much about her " +userName + ".That's cool!!")
 } 