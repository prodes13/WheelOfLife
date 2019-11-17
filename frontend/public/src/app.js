$(function() {
    var quiz = new Quiz();

    init();

    function init(){
        initEvent();
        // fetching data from a fake server
        fetch('data/olddata.json')
            .then(response => response.json())
            .then(function(data) {
                quiz.init(data.quiz);
            });
    }

    function initEvent() {
        $(document).on("click", "#previous", previousHandler);

        $(document).on("click", "#next", nextHandler);
    }

    function previousHandler() {
        quiz.previous();
    }

    function nextHandler() {
        quiz.next();
    }

});