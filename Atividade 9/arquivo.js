function lerAnoNascimento() {
    return parseInt(prompt("Digite o ano de nascimento:"));
}


function verificarVoto(anoNascimento) {
 
    let anoAtual = new Date().getFullYear();


    let idade = anoAtual - anoNascimento;


    if (idade >= 16) {
        return "Você pode votar este ano!";
    } else {
        return "Você não pode votar este ano.";
    }
}


let anoNascimento = lerAnoNascimento();


let mensagem = verificarVoto(anoNascimento);
alert(mensagem);