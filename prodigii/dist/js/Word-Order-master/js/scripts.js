var wordOrder = (function(sentence) {

var newSentence = sentence.split(" ");
var frequencies = {}, word;
var newFrequencies = [];
var sentenceLength = newSentence.length;

var capitalize = function(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

var capsSentence = newSentence.map(capitalize);

//map takes newSentence array, capitalizees all elements in array, and puts it
//into new array called capsSentence.
//var newSentence = newSentence.map(capitalize) also works, just change it
//to newSentence[i] in for loop.

  for(var i = 0; i < sentenceLength; i++){
      word = capsSentence[i]
      if (word in frequencies) {
        frequencies[word]++;
      } else {
        frequencies[word] = 1
      }
  }

  for(word in frequencies) {
    newFrequencies.push(word)
  }
  var result = newFrequencies.sort(function(a,b){return frequencies[b] - frequencies[a]}); 

return result.join()

});


$(document).ready(function() {
  $("form#input").submit(function(event) {
    var result = wordOrder($("input#sentence").val());
    $(".result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});
