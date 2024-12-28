// Get the Sign In button
const signInButton = document.getElementById('loginBtn');

// Add an event listener to the button to open a new window on click
signInButton.addEventListener('click', function() {
    // Open a new window with a specified URL (you can replace this with the path to your Sign In page)
    window.open('signin.html', 'Sign In', 'width=400,height=400');
});
// Get the Sign Up button
const signUpButton = document.getElementById('registerBtn');

// Add an event listener to the button to open a new window on click
signUpButton.addEventListener('click', function() {
    // Open a new window with a specified URL (you can replace 'signup.html' with your actual path)
    window.open('register.html', 'Sign Up', 'width=500,height=600');
});
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAELTe4cCMPCU-Ct-ojq5SgBRaRfR7ZDr0",
    authDomain: "travel-project-29ec6.firebaseapp.com",
    projectId: "travel-project-29ec6",
    storageBucket: "travel-project-29ec6.firebasestorage.app",
    messagingSenderId: "816746272819",
    appId: "1:816746272819:web:6b0205e60bd62a5dc82b46",
    measurementId: "G-403JFE5L0N"
  };
  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Get the modals
let signinModal = document.getElementById('signinModal');
let registerModal = document.getElementById('registerModal');
//let forgotPasswordModal = document.getElementById('forgotPasswordModal');

// Get the buttons that open the modals
let loginBtn = document.getElementById('loginBtn');
let registerBtn = document.getElementById('registerBtn');

// Get the <span> elements that close the modals
let closeSignin = document.getElementById('closeSignin');
let closeRegister = document.getElementById('closeRegister');
//let closeForgotPassword = document.getElementById('closeForgotPassword');

// Get the "Forgot Password" link
//let forgotPasswordLink = document.getElementById('forgotPasswordLink');

// Handle Sign In
document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Signed in:', user);
            alert('Successfully Signed In');
            signinModal.style.display = 'none';
        })
        .catch((error) => {
            console.error(error);
            alert('Error signing in: ' + error.message);
        });
});

// Modal Control
loginBtn.onclick = function() {
    signinModal.style.display = 'block';
}

registerBtn.onclick = function() {
    registerModal.style.display = 'block';
}

// forgotPasswordLink.onclick = function(e) {
//     e.preventDefault();
//     signinModal.style.display = 'none';
//     forgotPasswordModal.style.display = 'block';
// }

closeSignin.onclick = function() {
    signinModal.style.display = 'none';
}

closeRegister.onclick = function() {
    registerModal.style.display = 'none';
}

// closeForgotPassword.onclick = function() {
//     forgotPasswordModal.style.display = 'none';
//     signinModal.style.display = 'block';
// }

window.onclick = function(event) {
    if (event.target == signinModal) {
        signinModal.style.display = 'none';
    } else if (event.target == registerModal) {
        registerModal.style.display = 'none';
    } else if (event.target == forgotPasswordModal) {
        forgotPasswordModal.style.display = 'none';
    }
}
