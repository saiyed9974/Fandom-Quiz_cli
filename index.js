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

var questions = [{question:'Who played Veeru?',answer:'Dharmendra' },{question:'Whats the name of the village?',answer:'Ramgarh'},{question:'Who played Iqbalchacha role?',answer:'A.K.Hungal'},{question:'Who played Basanti?', answer:'Hema Malini'},{question:'Kitne Aadmi the?',answer:'Do'}];
for(var i = 0;i < questions.length;i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer)
}


console.log ("YAY! you scored "+score);