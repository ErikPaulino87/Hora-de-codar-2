var numero1 = prompt("Por favor, informe um número");
var numero2 = prompt("agora, informe outro número");
var numero3 = prompt("informe mais um número");
var string1 = parseInt(numero1)
var string2 = parseInt(numero2)
var string3 = parseInt(numero3)



if (numero1 > numero3 && numero2 > numero3) {
     alert("A soma dos dois maiores é " + (string1+string2)); }
else if (numero2 > numero1 && numero3 > numero1)   {
     alert("A soma dos dois maiores é " + (string2+string3)); }
         
else if (numero3 > numero2 && numero1 > numero2) {
     alert("A soma dos dois maiores é " + (string3+string1)); }