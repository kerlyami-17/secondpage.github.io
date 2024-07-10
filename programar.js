function calculateDerivative() {
    let functionInput = document.getElementById('function').value;
    const resultElement = document.getElementById('result');

    functionInput = functionInput.toLowerCase();

    try {
        let derivative = math.derivative(functionInput, 'x').toString();
        derivative = derivative.replace(/\*/g, ''); 
        resultElement.textContent = `La derivada de ${functionInput} es: ${derivative}`;
    } catch (error) {
        resultElement.textContent = 'Error: Asegúrate de introducir una función válida.';
    }
}