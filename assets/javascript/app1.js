$(document).ready(function () {

  $(".time-remain").hide();
  $("form").hide();
  $(".results").hide();
  $("#submit").hide();

  // Global Variables:
  var setTime = 45;
  var intervalId;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unAnswered = 0;
  var totalQuestions = 4;
  var fromSubmit = false;

  function resultsForYou() {
    var answers = ["a", "d", "b", "c"];
    fromSubmit = true;

    for (i = 1; i <= totalQuestions; i++) {
      var value = document.forms["quizForm"]["q" + i].value;
      if (value === answers[i - 1]) {
        correctAnswers++;
      } else if (value === "") {
        unAnswered++;
      } else {
        incorrectAnswers++;
      }
    };
    $("#submit").remove();
    $("form").hide();
    unAnswered = (4-(correctAnswers + incorrectAnswers));
    var resultsDiv = $("<div>");
    var p1 = $("<p>").text("Correct: " + correctAnswers);
    var p2 = $("<p>").text("Incorrect: " + incorrectAnswers);
    var p3 = $("<p>").text("Unanswered: " + unAnswered);
    resultsDiv.append(p1, p2, p3);
    $("#results").append(resultsDiv);
  }

  
  function timeCounter() {
   
    var stopTimer = clearInterval(intervalId);
    // clearInterval(intervalId);
    intervalId = setInterval(timeCounter, 1000);
    setTime--;
    $("#time-down").html("Time Remaining: " + " " + setTime);
    if (setTime < 1 && !fromSubmit) {
      clearInterval(intervalId)
      resultsForYou();
    
    }
  }

  $("#submit").on("click", function () {
    resultsForYou();
    $(".time-remain").hide();

  });

    $("#btn-start").on("click", function () {
      $("form").show();
      $("#btn-start").hide();
      $(".time-remain").show();
      $("#submit").show();
      timeCounter();
    });
  });




