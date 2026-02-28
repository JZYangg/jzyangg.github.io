document.addEventListener("DOMContentLoaded", () => {
  const vodData = JSON.parse(localStorage.getItem("selectedVod"));
  const detailDiv = document.getElementById("vod-detail");

  if (!vodData) {
    detailDiv.innerHTML = "<p>Stream not found.</p>";
    return;
  }

  detailDiv.innerHTML = `
    <h1>${vodData.title}</h1>
    <iframe width="100%" height="480" src="https://www.youtube.com/embed/${vodData.youtubeId}" frameborder="0" allowfullscreen></iframe>
    <p><a href="index.html">⬅ Back to all streams</a></p>
  `;
});
