$fn.trivia = function(){
    var trivia = this;
    trivia.userPick = null;
    trivia.answers = {
        correct: 0,
        incorrect: 0
    };
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
    }
]
$("start_button").click(function(){
    $(this).hide();
    $('.result').remove();
    $('div').html('');
})
};