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

      checkAnswers()

      // resultForYou();

    });

    function checkAnswers(){
      var answers;

      for(var i =0; i<5; i++){
        var answers = ("#right0" + [i]);
        if ($(answers).prop("checked")){
          correctAnswers++;
        }
        //  else if($(answers).prop("unchecked")){
        //   unAnswered++;
        // } 
        else{
          incorrectAnswers++;
        }
        resultForYou();
      }
    
    }

    function resultForYou() {
      $(".afterSubmit").show();
      $("form").hide();
      $("#submit").hide();
      $(".time-remain").hide();
      $(".correct").html("Correct Answers: " + correctAnswers);
      $(".incorrect").html("Incorrect Answers: " + incorrectAnswers);
      $(".unaswered").html("Unanswered: " + unAnswered);
       
    }
  }


});

