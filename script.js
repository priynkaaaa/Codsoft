const display = document.getElementById("display");

// Function to append a number to the display
function appendNumber(number) {
    if (display.innerText === "0" || display.innerText === "Error") {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

// Function to append an operator to the display
function appendOperator(operator) {
    const lastChar = display.innerText.slice(-1);
    if ("+-*/".includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator;
    } else {
        display.innerText += operator;
    }
}

// Function to clear the display
function clearDisplay() {
    display.innerText = "0";
}

// Function to delete the last digit from the display
function deleteDigit() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = "0";
    }
}

// Function to calculate the result
function calculateResult() {
    try {
        const result = eval(display.innerText);
        display.innerText = result;
    } catch {
        display.innerText = "Error";
    }
}
