let inputValue1 = 0;
let inputValue1changed = false;
let inputValue2 = 0;
let inputValue2changed = false;
let operatorElement = null;
let result = 0;
let lastInput = null;


function operate(){
    if (inputValue2changed == false && inputValue1changed == false){
        result = inputValue1;
        document.querySelector(".input-screen").innerText = inputValue1;
        document.querySelector(".result-screen").innerText = result;
    }
    else if(inputValue2changed === true){    
        switch (operatorElement){
            case "/": 
                result = Math.round((inputValue1 / inputValue2)*100)/100;
                break;
            case "X":
                result = Math.round((inputValue1 * inputValue2)*100)/100;
                break;
            case "+":
                result = Math.round((inputValue1 + inputValue2)*100)/100;
                break;
            case "-":
                result = Math.round((inputValue1 - inputValue2)*100)/100;
                break;
        }

        console.log(`inputValue1: ${inputValue1}`)
        console.log(`inputValue1changed: ${inputValue1changed}`);
        console.log(`operatorElement: ${operatorElement}`);
        console.log(`inputValue2: ${inputValue2}`);
        console.log(`inputValue2changed: ${inputValue2changed}`);
        document.querySelector(".result-screen").innerText = result;
        inputValue1 = result;
        inputValue2 = 0;
        inputValue2changed = false;
        operatorElement = null;   
    }
    lastInput = "operate";
    
    if(result == Infinity || NaN){
        clear();
        document.querySelector(".result-screen").innerText = "How dare you.  I'm resetting now.";
    }
}

function clear(){
    inputValue1 = 0;
    inputValue1changed = false;
    inputValue2 = 0;
    inputValue2changed = false;
    operatorElement = null;
    result = 0;
    lastInput = "clear";
    console.log(inputValue1);
    document.querySelector(".input-screen").innerText = ' ';
    document.querySelector(".result-screen").innerText = result;
} 

// button functionality; categorizes inputs into "operand", "operator", "operate", or "clear" categories
operands = document.querySelectorAll(".operand");
operands.forEach((e) => e.addEventListener("click", function operand(){
    // if operand is clicked after operator, function will store into inputValue2
    if (inputValue1changed == true && operatorElement != null){
        inputValue2 = inputValue2 + e.innerText;
        inputValue2 = Number(inputValue2);
        inputValue2changed = true;
        console.log(`inputValue2: ${inputValue2}`);
        console.log(`inputValue2changed: ${inputValue2changed}`);
        document.querySelector(".input-screen").innerText = `${inputValue1} ${operatorElement} ${inputValue2}`;
    }
    // if operand is clicked before operator, function will store into inputValue1
    else if (inputValue1changed == false){
            inputValue1 = inputValue1 + e.innerText;
            inputValue1 = Number(inputValue1);
            console.log(`inputValue1: ${inputValue1}`)
            console.log(`inputValue1changed: ${inputValue1changed}`);
            document.querySelector(".input-screen").innerText = inputValue1;
    }
    if (lastInput == "operate"){
        clear();
        inputValue1 = inputValue1 + e.innerText;
        inputValue1 = Number(inputValue1);
        console.log(`inputValue1: ${inputValue1}`)
        console.log(`inputValue1changed: ${inputValue1changed}`);
        document.querySelector(".input-screen").innerText = inputValue1;
    }
    lastInput = "operand";
}))

operators = document.querySelectorAll(".operator");
operators.forEach((e) => e.addEventListener("click", function operator(){
    // when operator is selected first
    if (inputValue1changed == false){
        inputValue1changed = true
        result = inputValue1;
        document.querySelector(".input-screen").innerText = `${inputValue1} ${operatorElement}`;
    }
    // when operator is selected after inputValue2 has been logged
    else if (inputValue1changed == true && inputValue2changed == true){
        operate();
    }
    operatorElement = (e.innerText);
    lastInput = "operator";
    document.querySelector(".input-screen").innerText = `${inputValue1} ${operatorElement}`;
    console.log(`operatorElement: ${operatorElement}`);
    console.log(`inputValue1changed: ${inputValue1changed}`);
}))

document.querySelector(".operate").addEventListener("click", operate)

document.querySelector(".clear-button").addEventListener("click", clear)