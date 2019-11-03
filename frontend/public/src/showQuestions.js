var quizContainer = document.getElementById('quiz');
var question = document.getElementById('question');
var answers = document.getElementById('answers');
var currentQuestion = 0;

const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");


function buildQuiz(myQuestions, num) {
    // for each question...
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
    // quizContainer.innerText = data[0].questions[0].question;
    // var answersText = data[0].questions[0].answers;
    buildQuiz(data[1].questions, currentQuestion);
   console.log(currentQuestion);
  
    // showSlide(0);
  
    // on submit, show results
    // submitButton.addEventListener("click", showResults);

    previousButton.addEventListener("click", function() {
        console.log("nr intreb ", currentQuestion);
        console.log("<>", data[1].questions.length);
        if(currentQuestion >= 1) {
            currentQuestion--;
            buildQuiz(data[1].questions, currentQuestion); 
            };
        }
      );
    nextButton.addEventListener("click", function() {
        console.log("nr intreb ", currentQuestion);
        console.log("<>", data[1].questions.length);
        
        if(currentQuestion < data[1].questions.length-1) {
            currentQuestion++;
            buildQuiz(data[1].questions, currentQuestion); 
            };
        });
}
