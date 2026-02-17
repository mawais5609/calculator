const numbersContainer = document.querySelector(".numbers")
const operatorsContainer = document.querySelector(".operators")
const customButtonsContainer = document.querySelector(".custom-buttons")
const display = document.querySelector('.display')

let firstNumber = ""
let secondNumber = ""
let currentOperator = null
let justCalculated = false

numbersContainer.addEventListener("click", (event) => {
    const targetNumber = event.target.getAttribute("data-value")

    if (targetNumber === null) {
        return
    }

    if (justCalculated && currentOperator === null) {
        firstNumber = targetNumber
        display.textContent = firstNumber
        
        justCalculated = false
        secondNumber = ""
        return
    }

    if (currentOperator === null) {
        firstNumber += targetNumber
        display.textContent = firstNumber
    } else {
        secondNumber += targetNumber
        display.textContent = secondNumber
    }

})

operatorsContainer.addEventListener("click", (event) => {
    const targetOperator = event.target.getAttribute("data-value")

    if (targetOperator === null) {
        return
    }

    else if (currentOperator !== null) {
        let result = operate(Number(firstNumber), currentOperator, Number(secondNumber))

        if (!Number.isInteger(result)) result = Number(result.toFixed(2))

        display.textContent = result

        firstNumber = result
        secondNumber = ""
        currentOperator = null
    }

    currentOperator = targetOperator
})

customButtonsContainer.addEventListener("click", (event) => {
    const targetCustomButton = event.target.getAttribute("id")

    if (targetCustomButton === null) {
        return
    }

    if (targetCustomButton === "equals") {

        if (firstNumber === "" || secondNumber === "" || currentOperator === null) {
            return
        }

        let result = operate(Number(firstNumber), currentOperator, Number(secondNumber))

        if (!Number.isInteger(result)) result = Number(result.toFixed(2))

        display.textContent = result

        firstNumber = result
        secondNumber = ""
        currentOperator = null
        justCalculated = true

    }

    if (targetCustomButton === "clear") {
        display.textContent = "0"
        firstNumber = ""
        secondNumber = ""
        currentOperator = null
        justCalculated = false
    }

    if (targetCustomButton === "del") {
        if (currentOperator === null) {
            firstNumber = firstNumber.slice(0, -1)
            display.textContent = firstNumber
        } else {
            secondNumber = secondNumber.slice(0, -1)
            display.textContent = secondNumber
        }
    }

    if (targetCustomButton === "change-sign") {

        if (currentOperator === null && firstNumber !== "") {
            firstNumber = firstNumber === -firstNumber ? firstNumber : -firstNumber
            display.textContent = firstNumber
        } 
        else if (currentOperator !== null && secondNumber !== "") {
            secondNumber = secondNumber === -secondNumber ? secondNumber : -secondNumber
            display.textContent = secondNumber
        }

    }


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
        case "+": return add(num1, num2)

        case "-": return subtract(num1, num2)

        case "x": return multiply(num1, num2)

        case "/": return divide(num1, num2)

        default: return "Invalid Operator."
    }
}
