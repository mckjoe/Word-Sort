$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    var sentence = $("#words").val();
    var words = sentence.split();
    console.log(words);



    // var inputs = words.map(function(word) {
    //   return $(item).val().
    // })
    event.preventDefault();
  });
});
