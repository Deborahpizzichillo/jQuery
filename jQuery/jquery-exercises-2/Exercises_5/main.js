// Write your solution here
//When the user focuses on a field, set its edge to "1px solid green". When the field is no longer sharp, set the border to "1px solid red".

$(document).ready(function(){
    $("#name").focus(function(){
      $("#name").css('border', '1px solid green');;
    });
  });
  $(document).ready(function(){
    $("#first_name").focus(function(){
      $("#first_name").css('border', '1px solid green');;
    });
  });
  $(document).ready(function(){
    $("#name").focusout(function(){
      $("#name").css('border', '1px solid red');;
    });
  });
  $(document).ready(function(){
    $("#first_name").focusout(function(){
      $("#first_name").css('border', '1px solid red');;
    });
});


