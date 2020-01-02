var timer = 10;
var correctAnswers = 0;
var incorrectAnswers = 0;
var currentQuestion = 0;

$(document).ready(function() {
    $("#resultsDiv").hide();

  var questions = [
    {
      question: "?",
      choices: ["a", "b", "c", "d"],
      correct: 0
    },
    {
      question: "?2",
      choices: ["a", "b", "c", "d"],
      correct: 2
    },
    {
      question: "?3",
      choices: ["a", "b", "c", "d"],
      correct: 1
    }
  ];

  $("#startGame").on("click", function() {
    $("#startGame").hide();
    displayQ();
  });

  function displayQ() {
    var timer = 15;
    var timerDiv = $("<div>");
    timerDiv.html("<h2>" + timer + "</h2>");
    // $("#gameDiv").html("<h2>" + timer + "</h2>")
    var countDown = setInterval( function() {
        timer--;
        timerDiv.html("<h2>" + timer + "</h2>")

        if (timer === 0) {
            incorrectAnswers++;
            $("#gameDiv").empty();
            userGuess = "";
            $("#answerDiv").html("<h2>Incorrect! You Ran Out of Time!</h2>");
            setTimeout(nextQ, 2000);
        }
    }, 1000);
    $("#gameDiv").append(timerDiv)


    var question = $("<h2>");
    question.appendTo("#gameDiv");
    question.html("<h1>" + questions[currentQuestion].question + "</h1>");

    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
      var answers = $("<button>");
      answers.html(questions[currentQuestion].choices[i]);
      answers.addClass("choiceBtn");
      answers.attr("data-value", i);
      answers.appendTo("#gameDiv");
    }
    $(".choiceBtn").on("click", function() {
      correct = questions[currentQuestion].correct;
      userGuess = parseInt($(this).attr("data-value"));
      console.log(correct);
      console.log("user" + userGuess);

      if (userGuess === correct) {
        correctAnswers++;
        $("#gameDiv").empty();
        userGuess = "";
        $("#answerDiv").html("<h2>Correct!</h2>");
        setTimeout(nextQ, 2000);
      } else {
        incorrectAnswers++;
        $("#gameDiv").empty();
        userGuess = "";
        $("#answerDiv").html("<h2>Incorrect!</h2>");
        setTimeout(nextQ, 2000);
      }
      console.log("correct count: " + correctAnswers);
      console.log("incorrect count: " + incorrectAnswers);
    });
  }
  function nextQ() {
    $("#answerDiv").empty();
    $("#gameDiv").empty();
    questions.splice(0, 1);

    if (questions.length === 0) {
      endGame();
    } else {
      displayQ();
    }
    function endGame() {
        $("#answerDiv").empty();
        $("#resultsDiv").show();
        $("#resultsDiv").html(
            "<h2>Thanks for playing!</h2>" + 
            "<h3>Here's how you did" + 
            "<h4>Correct Answers: " + 
            correctAnswers +
            "<h4>Incorrect Answers: " +
            incorrectAnswers)
        var reset = $("<button>")
        reset.attr("id", "resetBtn")
        reset.html("Reset")
        $("#resultsDiv").append(reset)
      }
      $("#resetBtn").on("click", function() {
        window.location.reload()
      })
  }

});
