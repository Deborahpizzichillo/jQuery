let items=["rock","paper","scissors"];

console.log("kies een item");

let keuzeSpeler;

 $('#scissors').click(function() {
    let random=  Math.floor(Math.random() * 3); 
    keuzeSpeler="scissors";
    console.log(keuzeSpeler);
    console.log(random);
    console.log(items[random]);
    switch (random) {
        case 0:
            alert("computer koos "+items[random]+ " computer win");
            break;
        case 1:
            alert("computer koos "+items[random]+ " speler wint");
            break;
        case 2:
             alert("computer koos "+items[random]+ " gelijkspel");
        default:
            break;
    }
    
    });


  $('#rock').click(function() {
    keuzeSpeler="rock";
    console.log(keuzeSpeler);
    let random=  Math.floor(Math.random() * 3); 

    switch (random) {
        case 0:
            alert("computer koos "+items[random]+ " gelijkspel");
            break;
        case 1:
            alert("computer koos "+items[random]+ " computer win");
            break;
        case 2:
             alert("computer koos "+items[random]+ " speler win");
        default:
            break;
    }
  });

  $('#paper').click(function() {
    keuzeSpeler="paper";
    console.log(keuzeSpeler);
    let random=  Math.floor(Math.random() * 3); 

    switch (random) {
        case 0:
            alert("computer koos "+ items[random]+ " speler win");
            break;
        case 1:
            alert("computer koos "+ items[random]+ " gelijkspel");
            break;
        case 2:
             alert("computer koos "+ items[random]+ " computer win");
        default:
            break;
    }
});