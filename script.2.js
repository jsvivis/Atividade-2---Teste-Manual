document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmarSenha').value;

    let mensagem = '';

    if (senha !== confirmarSenha) {
        mensagem = 'As senhas não coincidem!';
        document.getElementById('mensagem').innerText = mensagem;
    } else {
        mensagem = 'Usuário cadastrado com sucesso!';
        // Armazena o nome no localStorage
        localStorage.setItem('nomeUsuario', nome);

        // Simula o envio dos dados ao backend e redireciona para a página de boas-vindas
        setTimeout(() => {
            window.location.href = 'BemVindo.html';
        }, 1000);
    }
});