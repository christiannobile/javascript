// declareren van variabel met prompt, let (veranderbaar) enkel toepasbaar binnen accolades
let language = prompt("Enter your language (nl/eng/fr) : ", "insert nl, eng or fr");

// expected output, use toString to resolve Concatenation (different datatypes):
//if else function gebruiken indien je verschillende boodschappen wilt gebruiken afhankelijk van welke insert
if (language === "nl") {
    window.alert("Hallo iedereen");
} else if (language === "en") {
    window.alert("Hello everyone");
} else if (language === "fr") {
    window.alert("Bonjour tout le monde");
} else {
    window.alert("Please enter your language correctly: nl, fr or en");
}