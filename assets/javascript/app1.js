$(document).ready(function () {

  $(".time-remain").hide();
  $("form").hide();
  $(".afterSubmit").hide();
  $("#submit").hide();

  $("#btn-start").on("click", function () {
    $(".time-remain").show();
    $("form").show();
    $("#btn-start").hide();
    $(".afterSubmit").hide();
    $("#submit").show();
    timeCounter();



  });

  // Global Variables:
  var setTime = 10;
  var intervalId;
  var correctAnswers = 0;
  var incorrectAnswers = 0;
  var unAnswered = 0;
  var totalQuestions = 4;

  intervalId = setInterval(timeCounter, 1000);

  function timeCounter() {
    $("#time-down").html("Time Remaining: " + " " + setTime);
    setTime--;
    if (setTime === -1) {
      var stopTimer = clearInterval(intervalId);
      resultForYou();
    }

    $("#submit").on("click", function () {

      var q1 = document.forms["questions"]["q1"].value;
      var q2 = document.forms["questions"]["q2"].value;
      var q3 = document.forms["questions"]["q3"].value;
      var q4 = document.forms["questions"]["q4"].value;
      var answers = ["a", "d", "b", "c", " "];
      var questions = [q1, q2, q3, q4];
      // var user_input = $(this).attr("value");

      for (var i = 0; i < totalQuestions; i++) {

        if (questions[i] == answers[i]) {
          correctAnswers++;
        } else if (questions[i] != answers[i]) {
          incorrectAnswers++;
        } else {
          unAnswered++;

        }

      };
      resultForYou();

    });

    function resultForYou() {
      $(".afterSubmit").show();
      $("form").hide();
      $("#submit").hide();
      $(".correct").html("Correct Answers: " + correctAnswers);
      $(".incorrect").html("Incorrect Answers: " + incorrectAnswers);
      $(".unaswered").html("Unanswered: " + unAnswered);

    }
  }


});

