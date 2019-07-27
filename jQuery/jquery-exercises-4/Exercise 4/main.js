$("#play").click(function(){

    let Naam = $("#Naam").val();
    let Vnaam = $("#Vnaam").val();
    let Geboortedatum = $("#Geboortedatum").val();
    let Geboorteplaats = $("#Geboorteplaats").val();
    let Positie = $("#Positie").val();
    let Bedrijf = $("#Bedrijf").val();
    let Txt = $("#txt");

    Txt.text(
        // voorbeeld uitkomst Lesley Forn, Geboren op 11/11/1987 in Amsterdam, momenteel een Coach in Genk.
        Vnaam+" "+Naam+", born "+Geboortedatum+" in "+Geboorteplaats+", currently a  "+Positie+" at "+Bedrijf
    )
});