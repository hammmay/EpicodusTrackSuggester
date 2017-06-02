$(document).ready(function() {
  $("form#studentInput").submit(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();


    var quote = ("Both answers are Yes");
    if (question1 === "yes" && question2 === "yes") {
      quote === ("Yes and YES");
    }

    $("#rate").empty().append(quote);
    $("#quote").show();

    event.preventDefault();
  });
});

// NOTE: question1 = age
// NOTE: question2 = gender
