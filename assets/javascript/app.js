var timer = 10;
var correctAnswers = 0;
var incorrectAnswers = 0;
var currentQuestion = 0;




$(document).ready(function () {


   var questions = [{
        question: "?",
        choices: ["a", "b", "c", "d"],
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


    $("#startGame").on("click", function () {
        $("#startGame").hide();
        displayQ()
    })


    function displayQ() {
        var question = $("<h2>")
        question.appendTo("#gameDiv")
        question.html("<h1>" + questions[currentQuestion].question + "</h1>");

        for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
            var answers = $("<button>");
            answers.html(questions[currentQuestion].choices[i]);
            answers.addClass("choiceBtn");
            answers.attr("data-value", i)
            answers.appendTo("#gameDiv");

    };
    $(".choiceBtn").on("click", function() {
        correct = questions[currentQuestion].correct
        userGuess = parseInt($(this).attr("data-value"));
        console.log(correct)
        console.log("user" + userGuess)

        if (userGuess === correct) {
            correctAnswers++;
            $("#gameDiv").empty();
            userGuess="";
            $("#answerDiv").html("<h2>Correct!</h2>");
            setTimeout(nextQ, 2000);
        }
        else{
            incorrectAnswers++;
            $("#gameDiv").empty();
            userGuess="";
            $("#answerDiv").html("<h2>Incorrect!</h2>");
            setTimeout(nextQ, 2000);
        }
        console.log("correct count: " + correctAnswers)
        console.log("incorrect count: " + incorrectAnswers)
    });
    }
    function nextQ() {
        $("#answerDiv").empty();
        $("#gameDiv").empty();
        questions.splice(0, 1);
        if (questions.length === 0) {
            endGame()
        } else {            
        displayQ();
        }
    }
}) 