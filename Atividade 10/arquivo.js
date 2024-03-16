function lerDados() {
    let altura = parseFloat(prompt("Digite a altura da pessoa (em metros):"));
    let sexo = parseInt(prompt("Digite o sexo da pessoa (1 para feminino, 2 para masculino):"));
    return { altura, sexo };
}



function calcularPesoIdeal(altura, sexo) {
    let pesoIdeal;
    if (sexo === 1) {
        pesoIdeal = (62.1 * altura) - 44.7;
    } else if (sexo === 2) { 
        pesoIdeal = (72.7 * altura) - 58;
    } else {
        return "Sexo inválido!";
    }
    return pesoIdeal;
}


let { altura, sexo } = lerDados();


let pesoIdeal = calcularPesoIdeal(altura, sexo);
if (typeof pesoIdeal === 'number') {
    alert("O peso ideal é: " + pesoIdeal.toFixed(2) + " kg");
} else {
    alert(pesoIdeal);
}