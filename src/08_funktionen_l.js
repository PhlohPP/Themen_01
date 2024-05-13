
/******* Funktionen 01 *********/
// 1. Kapselung von Codeblöcken

// Funktionsaufruf | call(er)
// test();

// Funktionsrumpf | callee
// Funktionedeklaration
function test()
{
    console.log("Alakazam!");    
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Funktionsaufruf
// outputMagic(); 

// Funktionedeklaration
function outputMagic() 
{
    // interne Variable | What happens in VEGAS ...
    let firstMagic = "Abra";
    console.log("**~ " + firstMagic + "!" + " ~**");
}

// console.log(firstMagic) // Fehler : scope!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// outputMagic2("Abra"); // Argument --> Daten für Parameter
// outputMagic2("Cadabra");
// outputMagic2("Alakazam");
// outputMagic2(); // Fehler : undefined

function outputMagic2(magicWord) // Parameter
{
    console.log("**~ " + magicWord + "!" + " ~**");
}

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

outputMagic3("Abracadabra","you will be a jelly candelabra");
outputMagic3("Bibbidi-Bobbidi-Boo","no more water in the shoe");

const prompt = require('prompt-sync')({sigint: true});
outputMagic3(prompt("Magic Word? : "),prompt("Magic Spell? : ")); // Piping

function outputMagic3(magicWord, magicSpell) // Parameter
{
    console.log("**~ " + magicWord + ", " + magicSpell + "!" + " ~**");
}
