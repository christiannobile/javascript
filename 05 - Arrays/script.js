// Array is een lijst van verschillende soorten gegevens
//Array spreek je aan vanaf '0' in je loop
/*
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 444, 55, 895];
// interger 0
let sum = 0;
for (var i = 0; i < numbers.length; i++) {
    //+= sum + het volgende element id lijst
    //herdifiniëer mijn sum en daardoor krijg ik de gewenste output in de console log
    //vierkante haakjes zijn voor arrays
    sum += numbers[i];
}
console.log(sum);
*/
///////////////////////////////////////////////////////////////
/*
//index = i
let acteurs = ["Stalone", "Pitt", "Cruiz"];
for (let index = 0; index < acteurs.length; index++) {
    console.log("nummer " + (index+1) + " is " + acteurs[index])
}
*/
///////////////////////////////////////////////////////////////

let characters = ["Mario", "Luigi", "Peach"];
let charsBowser  = characters.slice(0);
charsBowser.push("Bowser");
console.log(characters);
console.log(charsBowser);
for (let index = 0; index < charsBowser.length; index++) {
    console.log(charsBowser[index])
}
for (let index = 0; index < characters.length; index++) {
    console.log(characters[index])
}
