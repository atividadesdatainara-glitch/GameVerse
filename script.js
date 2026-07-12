function cadastrar() {

    // Ler os dados
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const dataNascimento = document.getElementById("idade").value;

    // Verificar se os campos estão preenchidos
    if (nome === "" || email === "" || dataNascimento === "") {
        alert("Preencha todos os campos do formulário.");
        return;
    }

    
    // Calcular idade
    const nascimento = new Date(dataNascimento);
    const hoje = new Date();
    const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (!regexNome.test(nome)) {
        alert("Digite um nome válido.");
        return;
    }

    let idade = hoje.getFullYear() - nascimento.getFullYear();

    const mes = hoje.getMonth() - nascimento.getMonth();

    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }

    // Mostrar mensagem
    if (!Number.isInteger(idade) || idade >= 18 || idade > 90) {
        alert(
            "PARABÉNS!\n\n" +
            "Olá, " + nome + "!\n" +
            "E-mail: " + email + "\n\n" +
            "Parabéns! Você já pode solicitar sua CNH.\n\n" +
            "Como prêmio da loja, você ganhou um voucher promocional relacionado ao processo de habilitação, válido em compras acima de R$ 100,00."
        );
    } 
    else {
        alert(
            "Olá, " + nome + "!\n" +
            "E-mail: " + email + "\n\n" +
            "Infelizmente você ainda não pode solicitar sua CNH.\n\n" +
            "Você ganhou um cupom de 10%."
        );
    }
}

function entrarSite(){
    document.getElementById("abertura").style.display = "none";
}