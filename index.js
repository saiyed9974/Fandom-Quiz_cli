var readlineSync = require('readline-sync');
var username = readlineSync.question('What is your name ?  ');
console.log('wecome to SHOLEY movie quiz'+" "+username);
var score = 0;
function play(question,answer){
  var useranswer = readlineSync.question(question);
  if(useranswer === answer){
    console.log('you are right!');
    score = score + 1;
  } else {
    console.log('you are wrong!');
    
  }

  console.log('your score is :'+score);
  console.log('-----------------------------');
 
}

var questions = [{question:'What is volatility?',answer:'price swings' },{question:'Define short selling',answer:'Betting down'},{question:'What is portfolio diversification?',answer:'risk spread'},{question:'What does IPO stand for?', answer:'public offering'},{question:'What is market order?',answer:'Immediate trade'}];
for(var i = 0;i < questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


console.log ("YAY! you scored "+score);