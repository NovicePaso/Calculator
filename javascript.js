// establish and store events into variables (1st input, 2nd input)
// concat values for multiple digits pressed before operator
let inputValue1 = null;
let inputValue2 = null;
let operatorElement = "";
let result = null;

// button functionality; eventListener

let operands = document.querySelectorAll(".operand");
operands.forEach((e) => e.addEventListener("click", function operand(){
    inputValue = Number(e.innerText);
    console.log(inputValue);
}))

let operators = document.querySelectorAll(".operator");
operators.forEach((e) => e.addEventListener("click", function operator(){
    operatorElement = (e.innerText);
    console.log(operatorElement);
}))

// clear function
document.querySelector(".clear-button").addEventListener("click", function clear(){
    console.log("Insert Clear Function Here");
})

// divide function
result = inputValue1 / inputValue2;

// multiply function
result = inputValue1 * inputValue2;

// add function
result = inputValue1 + inputValue2;

// subtract function
result = inputValue1 - inputValue2;


// operate function for "="
document.querySelector(".operate").addEventListener("click", function operate(){
    console.log("Insert Operate Function Here");
})
// push results to display-screen

// error proofing: 
// enstablishing correct button order pressing rules
// divide by 0 response
// rounding decimals

