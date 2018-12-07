// declareren van variabel met prompt, let (veranderbaar) enkel toepasbaar binnen accolades
let score = prompt("Enter your score: ", "enter your score here");

// expected output, use toString to resolve Concatenation (different datatypes):
//if else function gebruiken indien je verschillende boodschappen wilt gebruiken afhankelijk van welke insert
// logical operators: =, >,...
if (score >= 90) {
    window.alert("Je hebt de rang A");
//added extra and statement '&&' for another if use '||'
} else if (score < 90 && score < 50) {
    window.alert("Je hebt de rang B");
} else if (score <= 50) {
    window.alert("Je hebt de rang C");
}