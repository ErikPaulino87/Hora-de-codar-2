var numero1 = prompt("Por favor, informe um número");
var numero2 = prompt("agora, informe outro número");
var numero3 = prompt("informe mais um número");


if (numero1 > numero2 && numero1 > numero3) {
     alert(numero1 + " é maior que " + numero2 + " e " + numero3); }
else if (numero2 > numero1 && numero2 > numero3) {
     alert(numero2 + " é maior que " + numero1 + " e " + numero3); }
else if (numero3 > numero1 && numero3 > numero2) {
     alert(numero3 + " é maior que " + numero1 + " e " + numero2); }