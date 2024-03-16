
function lerNumero(mensagem) {
    return parseFloat(prompt(mensagem));
}


function calcularMedia(num1, num2, num3, num4) {
    return (num1 + num2 + num3 + num4) / 4;
}


function verificarMedia() {
    let num1 = lerNumero("Digite o primeiro número:");
    let num2 = lerNumero("Digite o segundo número:");
    let num3 = lerNumero("Digite o terceiro número:");
    let num4 = lerNumero("Digite o quarto número:");

 
    if (num1 > 0 && num1 < 10 && num2 > 0 && num2 < 10 && num3 > 0 && num3 < 10 && num4 > 0 && num4 < 10) {
   
        let media = calcularMedia(num1, num2, num3, num4);
        

        if (media > 5) {
            alert("Você passou no teste!!!");
        } else {
            alert("Tente novamente");
        }
    } else {

        alert("Os números devem ser maiores que 0 e menores que 10. Tente novamente.");
    }
}


verificarMedia();