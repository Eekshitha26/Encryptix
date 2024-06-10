
document.addEventListener('DOMContentLoaded', function () {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));
    let currentInput = '';
    let operator = null;
    let previousInput = '';

    const updateDisplay = () => {
        display.textContent = `${previousInput} ${operator || ''} ${currentInput}`.trim();
    };

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.getAttribute('data-value');
            
            if (button.id === 'clear') {
                currentInput = '';
                previousInput = '';
                operator = null;
                updateDisplay();
                return;
            }
            
            if (button.id === 'equals') {
                if (operator && currentInput && previousInput) {
                    currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
                    previousInput = '';
                    operator = null;
                    updateDisplay();
                }
                return;
            }

            if (button.classList.contains('operator')) {
                if (currentInput) {
                    if (operator && previousInput) {
                        currentInput = eval(`${previousInput} ${operator} ${currentInput}`).toString();
                    }
                    operator = value;
                    previousInput = currentInput;
                    currentInput = '';
                }
                updateDisplay();
                return;
            }

            currentInput += value;
            updateDisplay();
        });
    });


    updateDisplay();
});
