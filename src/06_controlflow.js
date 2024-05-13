// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 40;

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

// if (true) // statt Test das Testergebnis festgesetzt zu Prüfzwecken nützlich (fake it!)
// if (isJohnOlder)  // Verweis auf ein Testergebnis
if (ageJohn > ageMark) // Test vor Ort
    { // codeblock
        console.log("John ist älter!");
    }
    //wenn der Test fehlschlägt, kommt nichts  

console.log("------------------");

/************ IF - ELSE ************/
// mit Alternative
// entweder ja oder nein

if (isJohnOlder)
{ // Ja-Zweig
    console.log("John ist älter!");
}
else
{ // Alternativ-Zweig
    console.log("John ist nicht älter!");
}   

console.log("------------------");

/************ IF - ELSE IF  ************/
// mit alternativen Fällen (älter, jünger, gleich alt)

if (isJohnOlder) // Test
{ // ja-Zweig
    console.log("John ist älter!");
}
else if (isJohnEqual)
{ // Alternativzweig 1..n
    console.log("John ist gleichalt!");   
}
else
{ // gemeinsame Alternative
    console.log("John ist jünger!");
}

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");


/****** Fallunterscheidung / SWITCH|CASE 1 ******/

const firstName = "Jane";
let job;

job = "driver";  // .. fährt TAXI! / UBER
job = "diver"; // .. taucht im Rhein!
job = "artist"; // .. malt ein Bild!
job = "pilot"; // .. macht etwas anderes! --> default
job = "teacher"; // .. unterrichtet!
job = "instructor"; // .. unterrichtet!

switch (job) 
{
    case "driver":  // Test auf Gleichheit ...
        console.log(firstName + ".. fährt TAXI!");
        break;
    case "diver":  // Test auf Gleichheit ...
        console.log(firstName + ".. taucht im Rhein!");
        break;
    case "artist":  // Test auf Gleichheit ...
        console.log(firstName + ".. malt ein Bild!");
        break;
    case "teacher":  // Test auf Gleichheit ...
    case "instructor":  // Test auf Gleichheit ...
        console.log(firstName + ".. unterrichtet!");
        break;
    default:  // Wichtig --> default!
        console.log(firstName + ".. macht etwas anderes!");
        break;
}