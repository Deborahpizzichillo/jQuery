// Write your solution here

let aantal = 0;
$( "#click-me" ).click(function() {
  aantal++;
  $("#clickAmount").val(aantal);
});