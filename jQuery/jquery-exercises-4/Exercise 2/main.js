$(document).ready(function(){

    let butten=$("knop");  
    
    
    $("#knop").click(function(event) {
        event.preventDefault();
    
    
    
        let salary = $("#salary").val();
        console.log(salary);
        let gender = $( "#gender" ).val();
        console.log(gender);
        let kinderen = $("#number of children").val();
        console.log(kinderen);
        
        let uitgaven = percentage(salary,18);
        let verzekering = percentage(salary,7);
        let bijdragen = percentage(salary,5);
        let korting = 0;
        let kosten = calcCost(uitgaven, verzekering, bijdragen);
        
        
        if (gender == "female"){
          korting =  korting + percentage(kosten,2);
        }
        
        let  aantal=parseInt(kinderen);
    
        if(aantal==3){
            korting = korting + percentage(kosten,1);
    
        }
        else if(aantal>3){
            korting = korting + percentage(kosten,2);
    
        }
        let resultaat = (salary - (kosten-korting));
        alert(resultaat);
        });
        
        
        function percentage(num, per){
          return (num/100)*per;
        }
    
        function calcCost(uitgaven, verzekering, bijdragen){
            return uitgaven+verzekering+bijdragen;
        }
        console.log(calcCost(100, 50, 10));
        
    });