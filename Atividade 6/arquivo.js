function lerNumero(mensagem) {
    return parseFloat(prompt(mensagem));
}

function encontrarMaior(num1, num2, num3, num4) {
    return Math.max(num1, num2, num3, num4);
}

var numero1 = lerNumero("Digite o primeiro número:");
var numero2 = lerNumero("Digite o segundo número:");
var numero3 = lerNumero("Digite o terceiro número:");
var numero4 = lerNumero("Digite o quarto número:");

var maiorNumero = encontrarMaior(numero1, numero2, numero3, numero4);

alert("O primeiro número informado é: "+ numero1);
alert("O último número informado é: "+ numero4);
alert("O maior número informado é: "+ maiorNumero);