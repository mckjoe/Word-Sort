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

    alert(newArray);



    // var inputs = words.map(function(word) {
    //   return $(item).val().
    // })
    event.preventDefault();
  });
});
