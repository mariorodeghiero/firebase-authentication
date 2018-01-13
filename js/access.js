var sair = document.getElementById('sair');
// var displayName = document.getElementById('displayName');
// var photoURL = document.getElementById('photoURL');
var currentUser = firebase.auth().currentUser;



// Logout
sair.addEventListener('click', function () {
    firebase.auth()
        .signOut()
        .then(function () {
            displayName.innerText = 'Você não está autenticado';
            alert('Você se deslogou');
        }, function (error) {
            console.error(error);
        });
});

