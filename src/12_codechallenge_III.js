

/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function getSentence(arr,op) {
    const GAP = " ";

    return arr.join(GAP) + getPunctuation(op);
}

function getPunctuation(op) {
    const PUNCT = ".";
    const QUEST = "?";
    const EXCLA = "!";
    const DEFAULT = "#$@&%*!";

    switch (op) {
        case "S":
            return PUNCT;
        case "Q":
            return QUEST;
        case "E":
             return EXCLA;
        default: 
            return DEFAULT;
    }
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputData) {
    console.log(outputData);
}