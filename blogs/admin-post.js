if (!firebase.apps.length) {
  firebase.initializeApp({
  apiKey: "AIzaSyARyRD0lCfzU8oQLAUU9tUr_YrGjirgTdg",
  authDomain: "nthlikeyou-68278.firebaseapp.com",
  projectId: "nthlikeyou-68278",
  });
}

const db = firebase.firestore();
const auth = firebase.auth();

auth.onAuthStateChanged(async (user) => {
  const form = document.getElementById('post-form');
  const msg = document.getElementById('access-message');

  if (!user) {
    msg.textContent = "You must be logged in to access this page.";
    return;
  }

  const doc = await db.collection("users").doc(user.uid).get();
  const userData = doc.data();

  if (!userData || !userData.admin) {
    msg.textContent = "Access denied. You are not authorized to post.";
    return;
  }

  msg.style.display = "none";
  form.style.display = "block";

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const date = new Date().toISOString().split('T')[0];

    if (title && content) {
      await db.collection("posts").add({ title, content, date });
      alert("Post published!");
      form.reset();
    }
  });
});
