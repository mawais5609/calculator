const numbersContainer = document.querySelector(".numbers")
const operatorsContainer = document.querySelector(".operators")
const customButtonsContainer = document.querySelector(".custom-buttons")
const display = document.querySelector('.display')

let firstNumber = ""
let secondNumber = ""
let operator = null

numbersContainer.addEventListener("click", (event) => {
})

operatorsContainer.addEventListener("click", (event) => {
})

customButtonsContainer.addEventListener("click", (event) => {
})


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
    switch (operator) {
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