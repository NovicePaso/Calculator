// establish and store events into variables (1st input, 2nd input)
inputValue1 = 0;
inputValue1changed = false;
inputValue2 = 0;
inputValue2changed = false;
operatorElement = null;
result = 0;

// operate functionality
function operate(){
    if (inputValue2changed == false && inputValue1changed == false){
        result = inputValue1;
        console.log(`result is: ${result}`);
    }
    else if(inputValue2changed === true){    
    switch (operatorElement){
        case "/": 
            result = Math.round((inputValue1 / inputValue2)*100) / 100;
            break;
        case "X":
            result = inputValue1 * inputValue2;
            break;
        case "+":
            result = inputValue1 + inputValue2;
            break;
        case "-":
            result = inputValue1 - inputValue2;
            break;
    }
    if(result === Infinity || NaN){
        console.log("How dare you.");
    }

    console.log(`inputValue1: ${inputValue1}`)
    console.log(`inputValue1changed: ${inputValue1changed}`);
    console.log(`operatorElement: ${operatorElement}`);
    console.log(`inputValue2: ${inputValue2}`);
    console.log(`inputValue2changed: ${inputValue2changed}`);
    console.log(`Result: ${inputValue1} ${operatorElement} ${inputValue2} is ${result}`);
inputValue1 = result;
inputValue2 = 0;
operatorElement = null;
}
}

// button functionality; eventListener
operands = document.querySelectorAll(".operand");
operands.forEach((e) => e.addEventListener("click", function operand(){
    // if operand is clicked after operator, function will store into inputValue2
    if (inputValue1changed == true){
        inputValue2 = inputValue2 + e.innerText;
        inputValue2 = Number(inputValue2);
        inputValue2changed = true;
        console.log(`inputValue2: ${inputValue2}`);
        console.log(`inputValue2changed: ${inputValue2changed}`);
    }
    // if operand is clicked before operator, function will store into inputValue1
    else if (inputValue1changed == false){
            inputValue1 = inputValue1 + e.innerText;
            inputValue1 = Number(inputValue1);
            console.log(`inputValue1: ${inputValue1}`)
            console.log(`inputValue1changed: ${inputValue1changed}`);
    }
}))

// tells calculator inputValue1 has been changed after selecting an operator
operators = document.querySelectorAll(".operator");
operators.forEach((e) => e.addEventListener("click", function operator(){
    if (inputValue1changed == false){
        inputValue1changed = true;
    }
    else if (inputValue1changed == true && inputValue2changed == true){
        operate();
    }
    operatorElement = (e.innerText);
    console.log(`operatorElement: ${operatorElement}`);
    console.log(`inputValue1changed: ${inputValue1changed}`);
}))

// clear function
document.querySelector(".clear-button").addEventListener("click", function clear(){
    inputValue1 = 0;
    inputValue1changed = false;
    inputValue2 = 0;
    inputValue2changed = false;
    operatorElement = null;
    result = 0;
console.log(inputValue1);
})


document.querySelector(".operate").addEventListener("click", operate)


// push results to display-screen


