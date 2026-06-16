const apiKey = "AIzaSyBGVO7YYvoIrz920_tpM9yVVzuSYVuIScw";
const channelId = "UCOmxC7bmROSd6QC-E_6C6Xg";
const maxResults = 10;

document.addEventListener("DOMContentLoaded", async () => {
  try {
    // Step 1: Get recent videos
    const searchRes = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&type=video&order=date&maxResults=${maxResults}`);
    const searchData = await searchRes.json();
    const videoIds = searchData.items.map(item => item.id.videoId).join(",");

    // Step 2: Fetch details for each video
    const detailsRes = await fetch(`https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&id=${videoIds}&part=snippet,liveStreamingDetails`);
    const detailsData = await detailsRes.json();

    const list = document.getElementById("vod-list");
    detailsData.items.forEach(video => {
      const title = video.snippet.title;
      const videoId = video.id;

      // Filter: Only include videos that were livestreams (i.e., have liveStreamingDetails)
      if (!video.liveStreamingDetails) return;

      const vodDiv = document.createElement("div");
      vodDiv.className = "vod-card";
      vodDiv.innerHTML = `
        <h3>${title}</h3>
        <iframe width="100%" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>
        <button class="view-btn" data-id="${videoId}" data-title="${title}">View Details</button>
      `;
      list.appendChild(vodDiv);
    });

    document.body.addEventListener("click", e => {
      if (e.target.matches(".view-btn")) {
        const videoId = e.target.dataset.id;
        const title = e.target.dataset.title;
        localStorage.setItem("selectedVod", JSON.stringify({ title, youtubeId: videoId }));
        window.location.href = `vod.html?id=${videoId}`;
      }
    });
  } catch (err) {
    console.error("Error loading livestreams:", err);
    document.getElementById("vod-list").innerHTML = "<p>Failed to load livestreams.</p>";
  }
});
