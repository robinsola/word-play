var finalwords = [];

$(document).ready(function() {
  $("form#blank").submit(function(event) {

    var rawWords = $("input#sentence").val().split(" ");

    rawWords.forEach(function(rawWord) {
      $("ul#result").append("<li>" + rawWord + "</li>");
    });



    event.preventDefault();
  });
});
