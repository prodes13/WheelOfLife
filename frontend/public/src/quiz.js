// $(function() {
class Quiz {
    constructor() {
        this.questionList = [];
        this.currentQuestionIndex = 0;
        this.main = $('#content');
    }

    init(topicList) {
        this.generateCard();
        this.questionList = topicList;
        if (this.questionList[this.currentQuestionIndex]) {
            var topicQuestion = this.questionList[this.currentQuestionIndex];
            if (topicQuestion) {
                this.generateQuestion(topicQuestion);
                this.topic.innerHTML = topicQuestion.topic;
            }
        }
    }

    resume(topicList, currentQuestionIndex) {
        this.generateCard();
        this.questionList = topicList;
        this.currentQuestionIndex = currentQuestionIndex;
        if (this.questionList[this.currentQuestionIndex]) {
            var topicQuestion = this.questionList[this.currentQuestionIndex];
            if (topicQuestion) {
                this.generateQuestion(topicQuestion);
                this.topic.innerHTML = topicQuestion.topic;
            }
        }
    }

    next() {
        var value = $("input[name='answer']:checked").val();
        this.questionList[this.currentQuestionIndex].response = value;
        this.currentQuestionIndex += 1;
        sessionStorage.setItem('questionList', JSON.stringify(this.questionList));
        sessionStorage.setItem('currentQuestionIndex', this.currentQuestionIndex);

        var topicQuestion = this.questionList[this.currentQuestionIndex];
        if (topicQuestion) {
            this.generateQuestion(topicQuestion);
        } else {
            this.getQuizByTopic();
            this.calculateDatasetsValues();

            var ctx = document.getElementById("myChart");
            var resultsChart = getChart(ctx, this.datasetsLabels, this.datasetsValues);

        }
    }

    previous() {
        var value = $("input[name='answer']:checked").val();
        this.questionList[this.currentQuestionIndex].response = value;
        if (this.currentQuestionIndex === 0) {
            return false;
        } else {
            this.currentQuestionIndex -= 1;
            sessionStorage.setItem('questionList', JSON.stringify(this.questionList));
            sessionStorage.setItem('currentQuestionIndex', this.currentQuestionIndex);

            var topicQuestion = this.questionList[this.currentQuestionIndex];
            if (topicQuestion) {
                this.generateQuestion(topicQuestion);
            }
        }

    }

    generateQuestion(topicQuestion) {
        var answers = `<form>`;
        for (var i in Object.values(topicQuestion.answers)) {
            var choice = Object.values(topicQuestion.answers)[i];
            var checked = '';
            if (i === topicQuestion.response) {
                checked = `checked="checked"`;
            }
            answers += `<div>
                                <label>
                                    <input type="radio" name="answer" ${checked}  value="${i}"> 
                                    ${choice}
                                </label>
                            </div>`;
        }
        answers += `</form>`;

        this.topic.innerHTML = topicQuestion.topic;
        this.question.innerHTML = topicQuestion.question;
        this.answers.innerHTML = answers;
    }

    generateCard() {
        var card = `<div class="card">
                            <div id="topic" class="card-title">SĂNĂTATE ȘI ENERGIE</div>
                            <div id="question" class="card-subtitle">Cât de fericit te simți cu starea generala de sănătate și de bună-dispoziție pe care le ai acum,  la acest moment</div>
                            <div id="answers" class="card-body">body</div>
                            <div class="card-navbar">
                                <button id="previous" type="button" class="button is-link is-small">Previous question</button>
                                <button id="next" type="button" class="button is-link is-small">Next question</button>
                                <button id="submit" type="button" class="button is-link is-small">Submit Quiz</button>
                            </div>
                        </div>`

        this.main.html(card);
        this.topic = document.getElementById('topic');
        this.message = document.getElementById('message');
        this.question = document.getElementById('question');
        this.answers = document.getElementById('answers');
    }

    getQuizByTopic() {
        var topicsId = [];
        for (var i = 0; i < this.questionList.length; i++){
            topicsId.push(this.questionList[i].topicId);
        }

        // filtreaza ca sa fie doar un id pentru ficare topic
        var uniqueTopicsId = topicsId.filter(function(item, position) {
            return topicsId.indexOf(item) == position;
        });

        this.quizByTopic = [];

        for (var j = 0; j < uniqueTopicsId.length; j++){
            var topic = {};
            topic.topicId = uniqueTopicsId[j];
            for (var k = 0; k < this.questionList.length; k++){
                if (topic.topicId === this.questionList[k].topicId){
                    if (!topic.topic){
                        topic.topic = this.questionList[k].topic;
                        topic.questions = [];
                        topic.responses = [];
                        var question = {};

                        question.topicQuestionNr = this.questionList[k].topicQuestionNr;
                        question.question = this.questionList[k].question;
                        question.response = this.questionList[k].response;

                        topic.questions.push(question);
                        topic.responses.push(this.questionList[k].response)
                    } else {
                        var question = {};
                        question.topicQuestionNr = this.questionList[k].topicQuestionNr;
                        question.question = this.questionList[k].question;
                        question.response = this.questionList[k].response;

                        topic.questions.push(question);
                        topic.responses.push(this.questionList[k].response)
                    }
                }
            }
            this.quizByTopic.push(topic);
        }
    }

    calculateDatasetsValues () {
        var questionsAvrege = [];
        this.datasetsLabels = [];

        for (var i = 0; i < this.quizByTopic.length; i++){
            var values = this.quizByTopic[i].responses;
            var sum = 0;

            for (var j = 0; j < values.length; j++){
                sum += values[j];
            }

            var average = sum / values.length;
            average = parseInt(average);

            this.datasetsLabels.push(this.quizByTopic[i].topic);
            questionsAvrege.push(average);
        }

        this.datasetsValues = setValues(questionsAvrege);
        debugger;
    }
}

// });