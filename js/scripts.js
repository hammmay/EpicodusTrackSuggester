$(document).ready(function() {
  $("form#studentInput").submit(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();

    var tracks = ("Both answers are yes");
    if (question1 === "no" && question2 === "yes") {
      tracks = ("That's too bad. You have to at least want to code to be a good fit for any tracks Epicodus has to offers.");
    }

    $("#options").empty().append(tracks);
    $("#tracks").show();

    event.preventDefault();
  });
});
