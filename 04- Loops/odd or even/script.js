// Loop van 0 - 20
for (var i = 0; i <= 20; i++) {
    console.log(i);
    isEven(i);

    function isEven(i) {
        if (i % 2 === 0) {
            console.log(i+" is even");
        }
    }
}