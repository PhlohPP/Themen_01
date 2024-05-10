// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 35;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF  ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if (true) // statt Test das Testergebnis festgesetzt zu Prüfzwecken nützlich
// {
//     console.log("John ist älter!");
// }

if (isJohnOlder)
    { // codeblock
        console.log("John ist älter!");
    }
    //wenn der Test fehlschlägt, kommt nichts
