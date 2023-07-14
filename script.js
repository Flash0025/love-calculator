// Love Calculator

//love calculator
// var math = require("mathjs");

function loveCalc(){
    
    var name1 = prompt("Enter your name: ");
    var name2 = prompt("Enter your partner name: ");
        
    var randNum = Math.random();
        
    randNum = Math.floor(randNum * 100);
        
    return randNum + 1;
        
    }
    
    loveValue = loveCalc();
    alert(loveValue + "%");
    