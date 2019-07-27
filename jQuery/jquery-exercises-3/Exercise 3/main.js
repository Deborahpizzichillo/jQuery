//// Write your solution here


let aantalguesses = 0;
let random = Math.floor(Math.random() * 99) + 1;

$( "#guess" ).click(function() {
  aantalguesses++;
  let guessvalue = $( "#value" ).val();
  if(random==guessvalue){
    alert("correct, times guessed: " + aantalguesses);
           //("correct, times guessed: "  + guessed times);
  }else if(random<guessvalue){
    alert("less");
          //minder
  }else{
  alert("more");
  }
  //meer
  
});
