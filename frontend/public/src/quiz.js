// $(function() {
    class Quiz {
        constructor() {
            this.quiz = [];
            this.topicNr = 0;
            this.questionNr = 0;
            this.topic = document.getElementById('topic');
            this.message = document.getElementById('message');
            this.question = document.getElementById('question');
            this.answers = document.getElementById('answers');
        }

        init(quiz) {
            this.quiz = quiz;

            if (this.quiz[this.topicNr]){
                var topicQuestion = this.quiz[this.topicNr].questions[this.questionNr];
                if (topicQuestion){
                    this.generateQuestion(topicQuestion);
                }
                this.topic.innerHTML = this.quiz[this.topicNr].topic;
                this.message.innerHTML = this.quiz[this.topicNr].message;
            }
        }

        previous () {
            var value = $("input[name='answer']:checked").val();
            this.quiz[this.topicNr].questions[this.questionNr].respons = value;
            if (this.topicNr === 0 && this.questionNr === 0 ){
                return false;
            } else if (this.questionNr === 0){
                this.topicNr -= 1;
                this.questionNr = this.quiz[this.topicNr].questions.length - 1;

                var topicQuestion = this.quiz[this.topicNr].questions[this.questionNr];
                if (topicQuestion){
                    this.generateQuestion(topicQuestion);
                }
                this.topic.innerHTML = this.quiz[this.topicNr].topic;
                this.message.innerHTML = this.quiz[this.topicNr].message;
            } else {
                this.questionNr -= 1;

                var topicQuestion = this.quiz[this.topicNr].questions[this.questionNr];
                if (topicQuestion){
                    this.generateQuestion(topicQuestion);
                }
            }

        }

        next () {
            var value = $("input[name='answer']:checked").val();
            this.quiz[this.topicNr].questions[this.questionNr].respons = value;
            this.questionNr += 1;

            if (this.quiz[this.topicNr]){
                var topicQuestion = this.quiz[this.topicNr].questions[this.questionNr];
                if (topicQuestion){
                    this.generateQuestion(topicQuestion);
                } else {
                    this.topicNr += 1;
                    this.questionNr = 0;

                    if (this.quiz[this.topicNr]){
                        var topicQuestion = this.quiz[this.topicNr].questions[this.questionNr];
                        if (topicQuestion){
                            this.generateQuestion(topicQuestion);
                        }
                        this.topic.innerHTML = this.quiz[this.topicNr].topic;
                        this.message.innerHTML = this.quiz[this.topicNr].message;
                    } else {
                        // setting values for different fields
                        var datasetsValues = setValues([4,6,3,4,5,6,7,5]);


                        var ctx = document.getElementById("myChart");
                        var resultsChart = getChart(ctx, datasetsLabels, datasetsValues);
                    }
                }
            }
        }

        generateQuestion (topicQuestion) {
            var answers = '<form>';
            for (var i in Object.values(topicQuestion.answers)){
                var choice = Object.values(topicQuestion.answers)[i];
                if (i === topicQuestion.respons){
                    answers += '<label>' +
                        '               <input type="radio" name="answer" checked="checked" value="' + i + '">' +
                        choice +
                        '           </label>';
                } else {
                    answers += '<label>' +
                        '            <input type="radio" name="answer" value="' + i + '">' +
                        choice +
                        '       </label>';
                }
            }
            answers += '</form>';

            this.question.innerHTML = topicQuestion.question;
            this.answers.innerHTML = answers;
        }
    }
// });