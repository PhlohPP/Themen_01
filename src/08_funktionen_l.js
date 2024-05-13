
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

outputMagic2("Abra"); // Argument --> Daten für Parameter
outputMagic2("Cadabra");
outputMagic2("Alakazam");

function outputMagic2(magicWord) // Parameter
{
    console.log("**~ " + magicWord + "!" + " ~**");
}