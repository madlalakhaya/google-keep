import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.6.8/auth.js";

// Initialize Firebase with your project configuration
const firebaseConfig = {
  apiKey: "AIzaSyABYGdHDhRr7hLzyvme8f3gwKEchFy2A6w",
  authDomain: "keep-7eb2b.firebaseapp.com",
  projectId: "keep-7eb2b",
  storageBucket: "keep-7eb2b.appspot.com",
  messagingSenderId: "550872355387",
  appId: "1:550872355387:web:b5ef1948842fb7561cc21e",
  measurementId: "G-54R3NXYTS7"
};

  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);


// DOM elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signInButton = document.getElementById("sign-in-button");
const googleSignInButton = document.getElementById("google-sign-in-button");
const signOutButton = document.getElementById("sign-out-button");

// Sign in with email and password
function signInWithEmail() {
  const email = emailInput.value;
  const password = passwordInput.value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      console.log("Signed in successfully!");
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// Sign in with Google
function signInWithGoogle() {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => {
      console.log("Signed in with Google successfully!");
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// Sign out
function signOutUser() {
  signOut(auth)
    .then(() => {
      console.log("Signed out successfully!");
    })
    .catch((error) => {
      console.error(error.message);
    });
}

// Event listeners
document.addEventListener("DOMContentLoaded", function () {
signInButton.addEventListener("click", signInWithEmail);
googleSignInButton.addEventListener("click", signInWithGoogle);
signOutButton.addEventListener("click", signOutUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in
      console.log("User is signed in: ", user.email);
    } else {
      // User is signed out
      console.log("User is signed out");
    }
  });
});

