// Functie binnen een for loop
let star = ""
for (var i = 1; i <= 5; i++) {
    //console log zit binnen for lus, zo zal elke stap geprint worden ipv enkel de eerste
    console.log(pyramid(i));
    // funtion += is the same as x = x + y
    function pyramid(i) {
        return (star += "*");
    }
}