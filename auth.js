import { auth } from './firebase.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Show pages based on user status
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('mainPage').style.display = 'block';
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('signupPage').style.display = 'none';
    } else {
        document.getElementById('loginPage').style.display = 'block';
        document.getElementById('signupPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'none';
    }
});

// Sign Up User
window.signUpUser = async () => {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert('Sign up successful!');
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};

// Login User
window.loginUser = async () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
        alert('Login successful!');
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};

// Logout User
window.logoutUser = async () => {
    try {
        await signOut(auth);
        alert('Logged out successfully!');
    } catch (error) {
        alert(`Error: ${error.message}`);
    }
};

// Toggle between Login and Sign Up
window.showLogin = () => {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('signupPage').style.display = 'none';
};

window.showSignUp = () => {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('signupPage').style.display = 'block';
};
