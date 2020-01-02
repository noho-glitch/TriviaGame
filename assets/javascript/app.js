var timer = 10;
var correctAnswers = 0;
var incorrectAnswers = 0;
var currentQuestion = 0;

$(document).ready(function() {
  $("#resultsDiv").hide();

  var questions = [
    {
      question: "Where did the fairy Navi get her name?",
      choices: ["Navigate", "North American Vampire, Inc", "Navel", "Navy"],
      correct: 0,
      image:
        "Where dihttps://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/2x1_NintendoSelectsTrivia_Questions_v04-ZeldaOcarina.0290fa98.jpgd the fairy Navi get her name?"
    },
    {
      question: "Which benefit is included with a Club Tortimer membership?",
      choices: [
        "A free wetsuit",
        "Access to online features",
        "A ride of Kapp'n's boat",
        "10 Bells a day for life"
      ],
      correct: 1,
      image:
        "https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/2x1_NintendoSelectsTrivia_Questions_v03-AnimalCrossing.0290fa98.jpg"
    },
    {
      question:
        "If Player 1 is controlling the green Luigi…then who’s controlling the other ones??!!",
      choices: ["Polterpup", "Player 2", "King Boo", "Players 2-4"],
      correct: 3,
      image:
        "https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/2x1_NintendoSelectsTrivia_Questions_v03-LuigisMansion.0290fa98.jpg"
    },
    {
      question: "What’s going on with these two Mii characters in this scene?",
      choices: [
        "They're falling in love at first sight",
        "They're overcoming a fear of heights",
        "They're fighting off giant hearts",
        "One is proposing to the other"
      ],
      correct: 3,
      image:
        "https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/2x1_NintendoSelectsTrivia_Questions_v02-TomodachiLife.0290fa98.jpg"
    },
    {
      question: "What’s Chase McCain’s first mission as a rookie officer?",
      choices: [
        "Getting donuts",
        "Practicing high fives",
        "Making a new friend",
        "Rescuing a cat from a tree"
      ],
      correct: 0,
      image:
        "https://aff5fa4925746bf9c161-fb36f18ca122a30f6899af8eef8fa39b.ssl.cf5.rackcdn.com/images/2x1_NintendoSelectsTrivia_Questions_v03.0290fa98.jpg"
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
    var countDown = setInterval(function() {
      timer--;
      timerDiv.html("<h2>" + timer + "</h2>");

      if (timer === 0) {
        clearInterval(countDown);
        incorrectAnswers++;
        $("#gameDiv").empty();
        userGuess = "";
        $("#answerDiv").html("<h2>Incorrect! You Ran Out of Time!</h2>");
        setTimeout(nextQ, 2000);
      }
    }, 1000);
    $("#gameDiv").append(timerDiv);

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
      clearInterval(timer);

      correct = questions[currentQuestion].correct;
      userGuess = parseInt($(this).attr("data-value"));
      console.log(correct);
      console.log("user" + userGuess);

      if (userGuess === correct) {
        clearInterval(countDown);
        correctAnswers++;
        $("#gameDiv").empty();
        userGuess = "";
        $("#answerDiv").html("<h2>Correct!</h2>");
        setTimeout(nextQ, 2000);
      } else {
        clearInterval(countDown);
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
          incorrectAnswers
      );
      var reset = $("<button>");
      reset.attr("id", "resetBtn");
      reset.html("Reset");
      $("#resultsDiv").append(reset);
    }
    $("#resetBtn").on("click", function() {
      window.location.reload();
    });
  }
});
