var topic = document.getElementById('topic');
var message = document.getElementById('message');
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var currentQuestion = 0;

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");


function buildQuiz(myQuestions, num) {
    // generating question with answers
    topic.innerHTML = myQuestions[num].topic;
    message.innerHTML = myQuestions[num].message;
    question.innerHTML = myQuestions[num].question;
    answers.innerHTML = '';
    for (var i in Object.values(myQuestions[num].answers)) {
            let choice = Object.values(myQuestions[num].answers)[i];
            answers.innerHTML += `<label>
            <input type="radio" name="question${num}" value="${choice}">
                ${choice}
            </label>`;        
        }
}
  
export function showQuestions(data) {
    let category = 0;
    buildQuiz(data[category].questions, currentQuestion);

    previousButton.addEventListener("click", function() {
        if(currentQuestion >= 1) {
            currentQuestion--;
            buildQuiz(data[category].questions, currentQuestion); 
            }
        }
      );
    nextButton.addEventListener("click", function() {
        if(currentQuestion < data[category].questions.length-1) {
            currentQuestion++;
            buildQuiz(data[category].questions, currentQuestion); 
            } 
        });
}
