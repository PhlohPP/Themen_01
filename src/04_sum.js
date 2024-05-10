/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

const prompt = require('prompt-sync')({sigint: true});

let firstNumber = prompt("Bitte eine Zahl eingeben: ");
let secondNumber = prompt("Und noch ein Zahl bitte: ");

console.log("Ohne Umwandlungen sieht's so aus: " + firstNumber + " + " + secondNumber + " = "+ firstNumber + secondNumber);
console.log("Schauen wir mal, ob das Zahlen sind: Typ erste Zahl:" + typeof firstNumber, "Typ zweite Zahl:" + typeof secondNumber);

var num1 = parseInt(firstNumber);
var num2 = parseInt(secondNumber);
const sum = num1 + num2;
console.log(sum);

