// Buttons
var authEmailPassButton = document.getElementById('authEmailPassButton');
var authFacebookButton = document.getElementById('authFacebookButton');
var authTwitterButton = document.getElementById('authTwitterButton');
var authGoogleButton = document.getElementById('authGoogleButton');
var authGitHubButton = document.getElementById('authGitHubButton');
var authAnonymouslyButton = document.getElementById('authAnonymouslyButton');
var createUserButton = document.getElementById('createUserButton');

// Inputs
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');

// Displays
var displayName = document.getElementById('displayName');
var photoURL = document.getElementById('photoURL');
var wrapper = document.getElementById('wrapper');

// Criar novo usuário
createUserButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function () {
            alert('Bem vindo ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.')
        });
});

// Autenticar com E-mail e Senha
authEmailPassButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (result) {
            console.log(result);
            wrapper.style.display = 'none';
            displayName.innerText = `Bem vindo, ${emailInput.value}`;
            // alert('Autenticado ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console.')
        });
});


// Autenticar com GitHub
authGitHubButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GithubAuthProvider();
    signIn(provider);
});

// Autenticar com Google
authGoogleButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});

// Autenticar com Facebook
authFacebookButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.FacebookAuthProvider();
    signIn(provider);
});

// Autenticar com Twitter
authTwitterButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.TwitterAuthProvider();
    signIn(provider);
});

function signIn(provider) {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerText = `Bem vindo, ${result.user.displayName}. 
                                    Voce esta conectado atraves do email: ${result.user.email}
                                    `;
            photoURL.setAttribute("src", result.user.photoURL);
            photoURL.style.display = 'block';
            wrapper.style.display = 'none';
        })
        .catch(function (error) {
            console.log(error);
            alert('Falha na autenticação');
        })
}