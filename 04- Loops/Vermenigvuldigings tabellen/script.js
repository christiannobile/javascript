// Loop van 0 - 20
for (var i = 0; i <= 10; i++) {
    console.log(i);
    console.log(multiply (i));
    console.log(i+" * 9 = "+(multiply (i)));

    function multiply(i) {
        return i * 9;
    }
}