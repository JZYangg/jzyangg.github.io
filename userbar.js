if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyARyRD0lCfzU8oQLAUU9tUr_YrGjirgTdg",
    authDomain: "nthlikeyou-68278.firebaseapp.com",
    projectId: "nthlikeyou-68278"
  });
}

window.auth = firebase.auth();
window.db = firebase.firestore();

auth.onAuthStateChanged(async (user) => {
  const display = document.getElementById('user-display');
  if (!display) return;

  if (user) {
    const doc = await db.collection("users").doc(user.uid).get();
    const username = doc.exists ? doc.data().username : user.email;

    display.innerHTML = `
      <span style="margin-left: 15px;">Welcome, <strong>${username}</strong></span>
      <a href="#" id="logout-link" style="margin-left: 10px;">Logout</a>
    `;

    document.getElementById('logout-link').addEventListener('click', () => {
      auth.signOut().then(() => location.reload());
    });
  } else {
    display.innerHTML = `
      <a href="../login.html" style="margin-left: 10px;">Login</a>
      <a href="../signup.html" style="margin-left: 10px;">Sign Up</a>
    `;
  }
});
