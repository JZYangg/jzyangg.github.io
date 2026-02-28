// Firebase setup (separate logic)
if (!firebase.apps.length) {
  firebase.initializeApp({
  apiKey: "AIzaSyARyRD0lCfzU8oQLAUU9tUr_YrGjirgTdg",
  authDomain: "nthlikeyou-68278.firebaseapp.com",
  projectId: "nthlikeyou-68278",
  });
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const blogList = document.getElementById('blog-list');

// Load blog posts from Firebase
db.collection("posts").orderBy("date", "desc").get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      const post = doc.data();
      const article = document.createElement('article');
      article.className = 'post';
      article.innerHTML = `
        <h2><a href="post.html?id=${doc.id}">${post.title}</a></h2>
        <p class="date">${post.date}</p>
        <p>${post.content.slice(0, 200)}...</p>
      `;
      blogList.appendChild(article);
    });
  })
  .catch(err => {
    console.error("Error loading posts:", err);
    blogList.innerHTML = `<p>Couldn't load posts. Please try again later.</p>`;
  });