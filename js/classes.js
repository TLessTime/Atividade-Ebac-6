// classes.js
export class Calculadora {
    constructor() {}

    calcular(numero1, numero2, operacao) {
        numero1 = Number(numero1);
        numero2 = Number(numero2);

        if (isNaN(numero1) || isNaN(numero2)) {
            return "Por favor, insira números válidos.";
        }

        switch (operacao) {
            case 'add':
                return this.adicionar(numero1, numero2);
            case 'subtract':
                return this.subtrair(numero1, numero2);
            case 'multiply':
                return this.multiplicar(numero1, numero2);
            case 'divide':
                return this.dividir(numero1, numero2);
            default:
                return "Operação inválida.";
        }
    }

    adicionar(a, b) {
        return a + b;
    }

    subtrair(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            return "Não é possível dividir por zero.";
        }
        return a / b;
    }
}
