let display = document.getElementById('display');
let currentInput = '';

document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Kontrola ci stlacena klavesa je cislo alebo operator//
    if (/[0-9+\-*/]/.test(key)) {
        appendToDisplay(key);

    } else if (key === 'Enter') {
        calculateResult();

    } else if (key === 'Escape') {
        clearDisplay();
    }
});

function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Error';
    }
}