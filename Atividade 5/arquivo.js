var i = 0;
var string = " os valores informados são ";
var soma = 0;


while (i < 6) {
    var numeros = parseInt(prompt("Digite um número:"))
    string  += numeros + " ";
    i++;
    soma+=numeros

}

var resultado = soma / 6
alert(string + ", e o resultado é " + resultado);