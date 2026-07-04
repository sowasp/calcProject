const display = document.querySelector("#display")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
const del = document.querySelector("#delete")
const point = document.querySelector("#point")
const isEqual = document.querySelector("#equal")

let firstOperand = null;
let secondOperand = null;
let selectedOperator = null;



/* making each number button functional and appending each num one after the other with += */
for(const button of numberButtons){
    button.addEventListener("click", function(){
        display.value += button.textContent
        })
}

/**implementing clear and delete buttons */
clear.addEventListener("click", function(){
    display.value = ""
    firstOperand = null;
    secondOperand = null;
    selectedOperator = null;
})

del.addEventListener("click", function(){
   display.value = display.value.slice(0, -1)
})

point.addEventListener("click", function(){
    if(display.value.includes(".")){
        return
    }
    display.value += "."
})

/**selecting operator and implementating concatenated operations */
for(const button of operatorButtons){
    button.addEventListener("click", function(){
        /**if an operator has already been selected... */
        if(selectedOperator !== null){
            secondOperand = display.value
            firstOperand = operate(firstOperand, selectedOperator, secondOperand)
            selectedOperator = button.textContent
            display.value = "";
            
        } else {
            firstOperand = display.value;
            selectedOperator = button.textContent;
            display.value = ""
        }
    })
}

isEqual.addEventListener("click", function(){
    if(selectedOperator === null || display.value === ""){
        return
    }

    secondOperand = display.value;
    if(secondOperand === "0" && selectedOperator === "/"){
        display.value = "ERROR"
        
    } else {
        display.value = operate(firstOperand, selectedOperator, secondOperand)
        selectedOperator = null;
    }
})

function operate(firstOperand, selectedOperator, secondOperand){

    firstOperand = Number(firstOperand);
    secondOperand = Number(secondOperand);

    if(selectedOperator === "+"){
        return firstOperand + secondOperand;
    }
    else if(selectedOperator === "-"){
        return firstOperand - secondOperand
    }
    else if(selectedOperator === "x"){
        return Number((firstOperand * secondOperand).toFixed(7))
    }
    else if(selectedOperator === "/"){
        return Number((firstOperand / secondOperand).toFixed(7))
    }
    } 

