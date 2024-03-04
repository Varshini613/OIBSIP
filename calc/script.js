function appendToDisplay(value) {
    if (value === 'ans') {
        value = document.getElementById('display').value;
    }
    document.getElementById('display').value += value;
}

function calculate() {
    var displayValue = document.getElementById('display').value;

    try {
        document.getElementById('display').value = eval(displayValue);
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    var currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}
