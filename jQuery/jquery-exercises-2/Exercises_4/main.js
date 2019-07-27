// Write your solution here
//When you click on a color button, you change the color of the text of the div.
$(function ()
{
    $('#green').on('click', function ()
    {
        $("p").css("color", "green");;
    });
});

$(function ()
{
    $('#blue').on('click', function ()
    {
        $("p").css("color", "blue");;
    });
});
$(function ()
{
    $('#red').on('click', function ()
    {
        $("p").css("color", "red");;
    });
});