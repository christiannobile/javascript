//Arrays: Array is een lijst van verschillende soorten gegevens
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
/*
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
*/
///////////////////////////////////////////////////////////////

/*
//MATHS: Max and min
let resultA = Math.min(7, 5, -12, 6, 32, 18, 14, -2);
console.log(resultA);
//herdifiniëring van 'result' gebruik enkel let of var bij een nieuwe variabele aanmaken
resultB = Math.max(-3, 9, 21, 36, 27, 54, 17, 35);
console.log(resultB);
console.log(resultA+resultB);
*/
///////////////////////////////////////////////////////////////
/*
//Willekeurig 1
let floatSpeed = 10.4;
let lowSpeed = mathfloor(foatSpeed);
let highSpeed = mathceil(floatSpeed);
*/
///////////////////////////////////////////////////////////////
/*
let kombatChars = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Raptile", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"];
//result zal een random nummer nemen binnen mijn array, een random geeft kommagetallen en daarom ronden we af naar onder met een floor
//dus ik definieer bereken result op een array op en geef mij een van de strings weer uit de array
result = Math.floor(Math.random() * kombatChars.length);
console.log(kombatChars[result]);
*/
///////////////////////////////////////////////////////////////


// 07 - OBJECTEN, object is a list of properties
//OEF 1 give a random item
/*
let character = {
    //add necessary properties
    name: "Christian",
    age: 26,
    items_to_give: ["sword", "staff", "bow"],
    giveItem: function () {
        //this: haal uit object
        randomItem = Math.floor(Math.random() * this.items_to_give.length);
        console.log(this.name + " gives you a " + this.items_to_give[randomItem]);
    } // Last property doesnt get a , or ; This is because Internet Explorer will give us a error!
};
*/
/*
//OEF 2 object.function
// Eigenschappen van object met properties, constructor wordt met hoofdletter geschreven
function Item(name, atk, mag, lvl, stock) {
    this.title = name;
    this.physic = atk;
    this.magic = mag;
    this.minLevel = lvl;
    this.available = stock;
};

let sword = new Item("Sword", 14, 0, 10, true);
let axe = new Item("axe", 15, 0, 10, true);
let sceptre = new Item("sceptre", 13, 16, 10, false);

let list = [sword, axe, sceptre];
// console log binnen een for lus voor elk object in mijn lijst laat title van object zien uit array
//voor een functie declareer je de variabele, zet altijd ronde haken (deze dienen voor parameter zo als int, string, enz)
let showItems = function () {
    let resultItems = "";
    for (let index = 0; index < list.length; index++) {
        //Voeg bij de lege string de 'title' van mijn list items van 0-2 en voeg na elk item een spatie toe
        resultItems += list[index].title + " ";
        //toon elk element van de array list in de console log
    };
    //hetgeen de functie gaat teruggeven = in dit geval is dit een lege string die we vullen met de for lus.
    //resultItems kan ik niet buiten mijn functie gebruiken, de variabelen bestaan enkel binnen mijn functie. De functie zelf kan ik wel terug oproepen
    return resultItems;
}
console.log(showItems());
let test = showItems() + " can be bought if in stock";
console.log(test);
*/

//OEF 3
//zet je objecten altijd bovenaan
let runeScimmy = new Weapon("Rune Scimitar", 21);
let mainCharacter = new Character("Christian", 14, 75, runeScimmy);

//dit is een kant en klaar blokje
function Character(username, lvl, hp, runeScimmy) {
    this.name = username;
    this.level = lvl;
    this.life = hp;
    this.weapon = runeScimmy;
    this.attack = function() {
        //wat de functie moet uitvoeren
        //this.name bestaat binnen mijn object en kan altijd opgehaald wornden, username bestaat enkel binnen de constructor en kan daarom niet gereturned worden
        return this.name+" attacks with "+this.weapon.title+" and deals "+(this.level*this.weapon.damage).toString()+" damage";
                                            //
    };
};

function Weapon(item, dmg) {
    this.title = item;
    this.damage = dmg;
};
//roep van mijn mainCharacter de attack functie aan
console.log(mainCharacter.attack());