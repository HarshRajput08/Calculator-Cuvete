const display = document.getElementById('display');
let currentInput = '';
let result = null;

function updateDisplay(value) {
    display.textContent = value;
}

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () =>{
        if (button.id === 'del') {
            currentInput = currentInput.slice(0, -1);
            if (!currentInput) currentInput = '0';
            updateDisplay(currentInput);
        } else if (button.id === 'reset') {
            currentInput = '0';
            result = null;
            updateDisplay(currentInput);
        } else if (button.id === 'equals') {
            try {
                result = eval(currentInput.replace('x', '*'));
                updateDisplay(result);
                currentInput = result.toString();
            } catch (e) {
                updateDisplay('Error');
            }
        } else {
            if (currentInput === '0') currentInput = '';
            currentInput += button.textContent;
            updateDisplay(currentInput);
        }
        
    });
});
    
