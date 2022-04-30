let dados = {
    enviar: () => {
        let email = document.querySelector("#email").value;
        let senha = document.querySelector("#pwd").value;

        if (email === "" || senha === "") {
            alert('Por favor preencha todos os campos obrigatórios.');
        } else {
            alert('Parabéns Login Feito com sucesso');
        }
        //console.log(email, senha);
    }
}

function enviar() {
    dados.enviar();
}
