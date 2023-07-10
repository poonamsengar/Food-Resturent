import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA_zF_JHNxnX0gcVCiKO6XaV793vr0IgYU",
  authDomain: "signin-singup-5418c.firebaseapp.com",
  projectId: "signin-singup-5418c",
  storageBucket: "signin-singup-5418c.appspot.com",
  messagingSenderId: "592024082738",
  appId: "1:592024082738:web:2255f528bc98b1b0f11f2b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toggle button Start
const usercon = document.querySelector(".user-container");
const regi_btn = document.querySelector(".registration-btn");
const login_btn = document.querySelector(".login-btn");

regi_btn.addEventListener("click", (e) => {
  e.preventDefault();
  usercon.classList.add("login-section--display");
});
login_btn.addEventListener("click", (e) => {
  e.preventDefault();
  usercon.classList.remove("login-section--display");
});

// Login btn Sign In here

document.getElementById("loginPink").addEventListener("click", function (e) {
  e.preventDefault();
  const Email1 = document.getElementById("Email1").value;
  const Password1 = document.getElementById("Password1").value;
  // console.log(Email1.value,Password1.value)

  signInWithEmailAndPassword(auth, Email1, Password1)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("Congratulation SignIn SuccessFull");
      window.location.href = "../";
      // document.getElementById("namLS").style.display="none";
      document.getElementById("InsertUser").innerHTML="Welcome Back <br> "+Email1+" was Login Successfully";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error message");
    });
});

// SignUp btn Register here
document.getElementById("SignUpPink").addEventListener("click", function (e) {
  e.preventDefault();
  // const username =  document.getElementById("username").value;
  const Email = document.getElementById("Email").value;
  const Password = document.getElementById("Password").value;

  createUserWithEmailAndPassword(auth, Email, Password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert("congratulation Create your account");
      window.location.href = "../";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("error please correct password");
      // ..
    });
});
