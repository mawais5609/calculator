function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, operator, num2) {
    switch (operator){
        case "+":
            return add(num1, num2)

        case "-":
            return subtract(num1, num2)

        case "x":
            return multiply(num1, num2)

        case "/":
            return divide(num1, num2)
        
        default:
            return "Invalid Operator."
    }
}

console.log(operate(20,"x",10))