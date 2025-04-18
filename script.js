document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário para fazer a validação

    // Defina o nome de usuário e senha corretos
    const correctUsername = "123";
    const correctPassword = "123";

    // Obtém os valores inseridos pelo usuário
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Valida o login
    if (username === correctUsername && password === correctPassword) {
        // Se o login estiver correto, redireciona para a página desejada (por exemplo, "pagina_secreta.html")
        window.location.href = "secreta.html";  // Substitua "pagina_secreta.html" com o nome da página de destino
    } else {
        // Se o login estiver incorreto, mostra um alerta
        alert("Usuário ou senha incorretos!");
    }
});

app.use(express.static('public'));
res.redirect('/secreta.html');










