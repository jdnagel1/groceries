$(document).ready(function() {
  $("#groceries form").submit(function(event) {
    var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    // var sortedBlanks = blanks.map(function(blank) {
    //   return blank.sort();
    // });

    $("#items").show();

    event.preventDefault();
  });
});
