// establish and store events into variables (1st input, 2nd input)
let inputValue1 = 0;
let inputValue1changed = false;
let inputValue2 = 0;
let inputValue2changed = false;
let operatorElement = "";
let result = 0;

// button functionality; eventListener
// concat values for multiple digits pressed before operator
// TO-DO: if operator is selected after inputValue2, store initial operation into result
let operands = document.querySelectorAll(".operand");
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
// TO-DO: test logic for inputValue1changed = false, operator selected as first input to calculator
let operators = document.querySelectorAll(".operator");
operators.forEach((e) => e.addEventListener("click", function operator(){
    if (inputValue1changed == false){
        inputValue1changed = true;
    }
    operatorElement = (e.innerText);
    console.log(`operatorElement: ${operatorElement}`);
    console.log(`inputValue1changed: ${inputValue1changed}`);
}))

// clear function
document.querySelector(".clear-button").addEventListener("click", function clear(){
    console.log("Insert Clear Function Here");
})

// operate functionality for "="
// TO-DO: If = is pressed after first input value vs operator
document.querySelector(".operate").addEventListener("click", function operate(){
    if(inputValue2changed === true){    
    switch (operatorElement){
        case "/": 
            result = inputValue1 / inputValue2;
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

    console.log(`inputValue1: ${inputValue1}`)
    console.log(`inputValue1changed: ${inputValue1changed}`);
    console.log(`operatorElement: ${operatorElement}`);
    console.log(`inputValue2: ${inputValue2}`);
    console.log(`inputValue2changed: ${inputValue2changed}`);
    console.log(`Result: ${inputValue1} ${operatorElement} ${inputValue2} is ${result}`);
}
})
// push results to display-screen

// error proofing: 
// enstablishing correct button order pressing rules
// divide by 0 response
// rounding decimals

