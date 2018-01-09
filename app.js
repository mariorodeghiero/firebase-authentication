( function () {
// Initialize Firebase
var config = {
    apiKey: "AIzaSyDEQNHMJ0rhnY-QhSjGxayOXOkIJ0fNB60",
    authDomain: "my-firebase-authenticati-599c7.firebaseapp.com",
    databaseURL: "https://my-firebase-authenticati-599c7.firebaseio.com",
    projectId: "my-firebase-authenticati-599c7",
    storageBucket: "",
    messagingSenderId: "1088864274215"
};
firebase.initializeApp(config);

const txtEmail = document.getElementById('txtEmail');
const txtPassword = document.getElementById('txtPassword');
const btnLogin = document.getElementById('btnLogin');
const btnSignUp = document.getElementById('btnSignUp');
const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click', e => {
    //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.cath(e => console.log(e.message));
})

btnSignUp.addEventListener('click', e => {
    //Check for real email

    //Get email and password
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    //Sign in

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.cath(e => console.log(e.message));
});

firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
        console.log(firebaseUser);
    } else {
        console.log('------------------------------------');
        console.log('not logged in');
        console.log('------------------------------------');
    }
})

}());