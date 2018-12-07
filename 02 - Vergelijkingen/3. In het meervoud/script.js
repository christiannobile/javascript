// declareren van variabel met prompt, let (veranderbaar) enkel toepasbaar binnen accolades
let appel = "appel";
let aantal = prompt("Hoeveel appels heb je?: ", "typ hier het aantal");

// expected output, use toString to resolve Concatenation (different datatypes):
//if else function gebruiken indien je verschillende boodschappen wilt gebruiken afhankelijk van welke insert
// logical operators: =, >,...
if (aantal >= 1) {
    window.alert("Je hebt "+aantal+" "+appel+"s"); 
}