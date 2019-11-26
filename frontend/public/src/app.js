$(function () {
    var quiz = new Quiz();

    init();

    function init() {
        initEvents();
        resume();
    }

    function loadData() {
        fetch('data/newData.json')
            .then(response => response.json())
            .then(function (data) {
                quiz.init(data.query[0].questions);
            });
    }

    function resume() {
        let sessionData = sessionStorage.getItem('questionList');
        let currentQuestionIndex = parseInt(sessionStorage.getItem('currentQuestionIndex'));
        sessionData = JSON.parse(sessionData);

        if (sessionData) {
            quiz.resume(sessionData, currentQuestionIndex);
        }
    }

    function initEvents() {

        $(document).on("click", ".startQuizButton", startQuizHandler);

        $(document).on("click", "#previous", previousHandler);

        $(document).on("click", "#next", nextHandler);
    }

    function startQuizHandler() {
        // fetching data from a fake server
        loadData();
    }

    function previousHandler() {
        quiz.previous();
    }

    function nextHandler() {
        quiz.next();
    }

});