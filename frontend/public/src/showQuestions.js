var questionPlaceholder = document.getElementById('question');
var answers = [];
for(var i = 0; i < 5; i++) {
    answers[i] = document.getElementById('answer'+(i+1));
}

export function showQuestions(data, num) {
    questionPlaceholder.innerText = data[0].questions[num].question;
    var answersText = data[0].questions[num].answers;
    console.log(Object.values(answersText));
    for(var i = 0; i<answers.length; i++ ) {
        answers[i].innerText = Object.values(answersText)[i];
    }
    
}