function lerValores() {
    let valor1 = parseInt(prompt("Digite o primeiro valor:"));
    let valor2 = parseInt(prompt("Digite o segundo valor:"));
    return { valor1, valor2 };
}


function calcularOperacao(valor1, valor2, operacao) {
    switch (operacao) {
        case 1:
            return valor1 + valor2;
        case 2:
            return valor1 - valor2;
        case 3:
            return valor1 / valor2;
        case 4:
            return valor1 * valor2;
        default:
            return "Operação inválida!";
    }
}


function realizarCalculo() {
    let { valor1, valor2 } = lerValores();
    let operacao = parseInt(prompt("Selecione a operação desejada:\n1. Adição\n2. Subtração\n3. Divisão\n4. Multiplicação"));
    let resultado = calcularOperacao(valor1, valor2, operacao);
    return resultado;
}


let resultado = realizarCalculo();
alert("O resultado da operação é: " + resultado);