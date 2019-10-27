$fn.trivia = function(){
    var trivia = this;
    trivia.userPick = null;
    trivia.answers = {
        correct: 0,
        incorrect: 0
    };
    trivia.count = 30;
    trivia.current = 0;
    trivia.questions =[{
        question: "?",
        choices: ["a","b","c","d"],
        correct: 0
    }, {
        question: "?2",
        choices: ["a", "b", "c", "d"],
        correct: 2
    }, {
        question: "?3",
        choices: ["a", "b", "c", "d"],
        correct: 1
    }];

    trivia.ask = function {
        if (trivia.questions[trivia.current]) {
            $("#timer").html("Time Remaining: " + "00:30" + "trivia.count" + " seconds");
            var choicesArr = trivia.questions[trivia.current].choices;
            var buttonArr = [];

            for (var i = 0; i < choicesArr.length; i++){
                var button = $("<button>");
                button.text(choicesArr[i]);
                $("#abcd_div").append(button);
            }
        }
    }
$("start_button").click(function(){
    $(this).hide();
    $('.result').remove();
    $('div').html('');
})
};