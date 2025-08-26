// utils.js
export function validarEntrada(valor) {
    return !isNaN(parseFloat(valor)) && isFinite(valor);
}

export function atualizarResultado(resultado) {
    const resultadoElement = document.getElementById('result');
    resultadoElement.textContent = `Resultado: ${resultado}`;
}
