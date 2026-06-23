const display = document.querySelector("#display")
const numberButtons = document.querySelectorAll(".number")
const operatorButtons = document.querySelectorAll(".operator")
const clear = document.querySelector("#clear")
const del = document.querySelector("#delete")
const point = document.querySelector("#point")
const isEqual = document.querySelector("#equal")



/* making each number button functional and appending each num one after the other with += */
for(const button of numberButtons){
    button.addEventListener("click", function(){
        display.value += button.textContent
        })
}

/**implementing clear and delete buttons */
clear.addEventListener("click", function(){
    display.value = ""
})

del.addEventListener("click", function(){
   display.value = display.value.slice(0, -1)
})

let firstOperand;
let selectedOperator;
for(const button of operatorButtons){
    button.addEventListener("click", function(){
        firstOperand = display.value;
        selectedOperator = button.textContent;
        display.value = ""


        })
    }
let secondOperand;
isEqual.addEventListener("click", function(){
    secondOperand = display.value;
    display.value = operate(firstOperand, selectedOperator, secondOperand)
    
    

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
        return firstOperand * secondOperand
    }
    else if(selectedOperator === "/"){
        return firstOperand / secondOperand
    }
    } 

