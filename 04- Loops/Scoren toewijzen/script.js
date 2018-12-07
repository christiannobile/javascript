// Loop van 0 - 20
for (var i = 0; i <= 100; i++) {
    console.log("Voor "+(i)+" punten heb je graad "+(certificate(i)));

    function certificate(i) {
        if ((i) >= 90) {
            return "A";
        } else if ((i) >= 80) {
            return "B";
        } else if ((i) >= 70) {
            return "C";
        } else if ((i) >= 65) {
            return "D";
        } else {
            return "F";
        }
    }
}