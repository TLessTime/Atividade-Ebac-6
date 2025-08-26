// app.js
import { Calculadora } from './classes.js';
import { validarEntrada, atualizarResultado } from './utils.js';

const calculadora = new Calculadora();

document.addEventListener('DOMContentLoaded', () => {
    const numero1Input = document.getElementById('number1');
    const numero2Input = document.getElementById('number2');
    const operacaoSelect = document.getElementById('operation');
    const calcularButton = document.getElementById('calculate-button');

    calcularButton.addEventListener('click', () => {
        const numero1 = numero1Input.value;
        const numero2 = numero2Input.value;
        const operacao = operacaoSelect.value;

        if (!validarEntrada(numero1) || !validarEntrada(numero2)) {
            atualizarResultado("Por favor, insira números válidos.");
            return;
        }

        const resultado = calculadora.calcular(numero1, numero2, operacao);
        atualizarResultado(resultado);
    });
});
