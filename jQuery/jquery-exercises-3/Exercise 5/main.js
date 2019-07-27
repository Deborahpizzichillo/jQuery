//// Write your solution here

$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $(".square").finish().animate({
            left: "-=10"
        });
        break;
    case 38:    //up arrow key
        $(".square").finish().animate({
            top: "-=10"
        });
        break;
    case 39:    //right arrow key
        $(".square").finish().animate({
            left: "+=10"
        });
        break;
    case 40:    //bottom arrow key
        $(".square").finish().animate({
            top: "+=10"
        });
        break;
    }
});

// bonus  When the block reaches one side of the page, it must reappear on the other side. ..............
