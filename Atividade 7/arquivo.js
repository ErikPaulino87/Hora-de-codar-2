function lerNumero(mensagem) {
    return parseFloat(prompt(mensagem));
}

function somarMenoresQue72() {
    let numeros = [];
    let soma = 0;

 
    for (let i = 1; i <= 6; i++) {
        let numero = lerNumero("Digite o " + i + "º número:");
        numeros.push(numero);

       
        if (numero < 72) {
            soma += numero;
        }
    }

    return {
        somaMenoresQue72: soma,
        numerosInformados: numeros
    };
}

let resultado = somarMenoresQue72();

alert("Valor final da soma dos números menores que 72: " + resultado.somaMenoresQue72 +
      "\nTodos os números informados: " + resultado.numerosInformados.join(", "));

