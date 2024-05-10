/* Wahrheitswerte */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1980;
const birthYearMark = 1990;

// Berechnung Alter
let date = new Date(); // Systemfunktion Datum
let year = date.getFullYear(); // Daten liefern lassen
// let year= (new Date().getFullYear()) // Kompaktere Schreibweise; Punktnotation
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("Datum: " + year); // liefert umformatierte Augabe
console.log("Datum: " , year); // liefert die Formatierung wie unten
console.log(year); // gleiche Formatierung wie console.log("Datum: " , date);

// Test
let isJohnOlder, isJohnEqual, isJohnYounger;// Is John older? --> y/n --> true/false
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);
isJohnYounger = (ageJohn < ageMark);

console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("isJohnYounger: " + isJohnYounger);

