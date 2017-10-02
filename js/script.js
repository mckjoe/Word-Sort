$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    var sentence = $("#words").val();
    var words = sentence.split(" ");
    var newArray = [];
    var input = words.map(function(word) {
      if (word.length > 3) {
        newArray.push(word);
      }
    });
    var newArrayReverse = newArray.reverse().join();
    $("#output").text(newArrayReverse);
    $("#init-showing").hide();
    $("#init-hiding").show();



    console.log(newArrayReverse);




    event.preventDefault();
  });
});
