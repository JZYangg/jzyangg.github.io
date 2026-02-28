const firebaseConfig = {
  apiKey: "AIzaSyARyRD0lCfzU8oQLAUU9tUr_YrGjirgTdg",
  authDomain: "nthlikeyou-68278.firebaseapp.com",
  projectId: "nthlikeyou-68278",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const loginForm = document.getElementById('login-form');
const logoutBtn = document.getElementById('logout-btn');
const blogForm = document.getElementById('post-form');
const googleBtn = document.getElementById('google-login');

auth.onAuthStateChanged(user => {
  if (user) {
    blogForm && (blogForm.style.display = 'block');
    loginForm.style.display = 'none';
    logoutBtn && (logoutBtn.style.display = 'inline-block');
  } else {
    blogForm && (blogForm.style.display = 'none');
    loginForm.style.display = 'block';
    logoutBtn && (logoutBtn.style.display = 'none');
  }
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const loginId = document.getElementById('login-id').value.trim();
  const password = loginForm.password.value;

  // Check if input is email
  const isEmail = loginId.includes('@');

  let emailToUse = loginId;

  if (!isEmail) {
    // Username provided — lookup email
    try {
      const users = await db.collection("users").where("username", "==", loginId).limit(1).get();
      if (users.empty) {
        return alert("Username not found.");
      }
      emailToUse = users.docs[0].data().email;
    } catch (err) {
      return alert("Failed to lookup username.");
    }
  }

  // Sign in with resolved email
  auth.signInWithEmailAndPassword(emailToUse, password)
    .catch(err => alert(err.message));
});

googleBtn?.addEventListener('click', () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch(err => alert(err.message));
});

logoutBtn?.addEventListener('click', () => {
  auth.signOut();
});
