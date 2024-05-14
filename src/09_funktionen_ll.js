"use strict";

/*** Rechner */
/*
0. a+b | a-b | a*b | a/b  --> Ergebnis c 

1. Dateneingabe + -Überprüfung : 
2. Auswahl Rechenart : check!
3. Fkt. Grundrechenarten : check!
4. Ausgabe in Konsole : check!
*/

const prompt = require('prompt-sync')({sigint: true});
const INPUT_STR_NUM1 = "Gimme. A! NUMBER!!1  :  ";
const INPUT_STR_NUM2 = "And another number, if you please =)  :  ";
const INPUT_STR_OP = "Operator?  :  ";
const RESULT_STR = "Aaaaaand a big round of applause for. Our! RESULT!!1  :  "
const ERROR_STR_DIV = "Ooh no, you tried to divide by 0. Please, don't.";
const ERROR_STR_GEN = "Something went wrong. Maybe check the cables and the hamster cage.";


startApp();
function startApp() {
    output(RESULT_STR + calculator(getNum1(),getNum2(),getOp()));
}

function getNum1() {
    return parseInt(prompt(INPUT_STR_NUM1));
}

function getNum2() {
    return parseInt(prompt(INPUT_STR_NUM2));
}

function getOp() {
    return prompt(INPUT_STR_OP);
}

// module: calculator | tests:
// agreement : "+","-","*",":","/"
// output(calculator(3,2,"+"));
// output(calculator(3,2,"-"));
// output(calculator(3,2,"*"));
// output(calculator(3,2,":"));
// output(calculator(3,2,"/"));
// output(calculator(3,0,"/"));
// output(calculator(3,2,"#?!"));
function calculator(a,b,op) {
    
    switch (op) {
        case "+": 
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case ":":
        case "/":
            return divide(a,b);
        default: 
            return ERROR_STR_GEN
    }

}

// module: division a / b |  test:
// output(divide(2,3));
// output(divide(6,-3));
// output(divide(2,0));
// output(divide(4,2));
// output(divide(3,2));
// output(divide(3,-2));
// output(divide(0,2));
// output(divide(3,0));
//output(divide(0,0));
function divide(a,b) {
    if (b !== 0) {
        return a / b;
    }
    else {
        return ERROR_STR_DIV;
    }
}

// module: multiplication a * b |  test:
// output(multiply(2,3));
// output(multiply(2,-3));
// output(multiply(2,0));
function multiply(a,b) {
    return a * b;
}

// module: subtraction a - b |  test:
// output(subtract(2,3));
// output(subtract(2,-3));
// output(subtract(2,0));
function subtract(a,b) {
    return a - b;
}

// module: addition a + b |test:
// output(add(2,2));
// output(add(2,-3));
// output(add(2,0));
function add(a,b) {
    return a + b;
}

// module: output | test:
// output("hello");
// output(2);
function output(outputData) {
	console.log(outputData);
}