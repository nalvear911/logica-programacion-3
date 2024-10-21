const calcularBtn = document.getElementById("calcularBtn");
const borrarBtn = document.getElementById("borrarBtn");
const resultadoDiv = document.getElementById("resultado");
const historialDiv = document.getElementById("historial");
const numerosInput = document.getElementById("numeroInput");
let historial = [];

calcularBtn.addEventListener("click", calcularFactorial);
borrarBtn.addEventListener("click", borrarResultados);

function calcularFactorial() {
    let entrada = Number(numerosInput.value);
    
    if (isNaN(entrada) || entrada < 0) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    let factorial = 1;
    for (let i = 1; i <= entrada; i++) {
        factorial *= i;
    }

    resultadoDiv.innerText = `El factorial de ${entrada} es ${factorial}`;
    almacenarResultado(entrada, factorial);
    numerosInput.value = ''; // Limpiar el input
}

function almacenarResultado(numero, resultado) {
    // Agregar el nuevo resultado al historial
    historial.unshift(`${numero}! = ${resultado}`);
    
    // Mantener solo los últimos 5 resultados
    if (historial.length > 5) {
        historial.pop(); // Eliminar el más antiguo si hay más de 5
    }
    
    mostrarHistorial();
}

function mostrarHistorial() {
    historialDiv.innerHTML = '';
    historial.forEach(resultado => {
        const li = document.createElement("li");
        li.innerText = resultado;
        historialDiv.appendChild(li);
    });
}

function borrarResultados() {
    resultadoDiv.innerText = '';
    historial = [];
    mostrarHistorial();
}
