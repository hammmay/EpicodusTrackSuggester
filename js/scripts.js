$(document).ready(function() {
  $("form#studentInput").submit(function(event) {
    var question1 = $("select#question1").val();
    var question2 = $("select#question2").val();
    var question3 = $("select#question3").val();
    var question4 = $("select#question4").val();
    var question5 = $("select#question5").val();

    var tracks = ("Error");
    if (question1 === "no") {
      tracks = ("That's too bad. You have to at least want to code to be a good fit for any tracks Epicodus has to offers.");
    }
    if (question2 === "yes" && question1 === "yes") {
      tracks = ("C# and .NET is the best way to go. C# is the main language they use at Microsoft.");
    }
    if (question3 === "yes" && question1 === "yes") {
      tracks = ("You should consider the CSS and Design course where you'll learn how to make everything pretty from the back end.");
    }
    if (question4 === "yes" && question1 === "yes") {
      tracks = ("The Java and Android track will give you a solid foundation in programing and you'll even get to build cool Android apps.");
    }
    if (question5 === "yes" && question1 === "yes") {
      tracks = ("It's normal to be nervous, especially if you have no experience in programing. But don't worry! The instructors at Epicodus are here to answer your questions about the different options and why they might be a good fit.");
    }

    $("#options").empty().append(tracks);
    $("#tracks").show();

    event.preventDefault();
  });
});
