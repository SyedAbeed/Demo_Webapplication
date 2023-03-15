fetch('/videos')
  .then(response => response.json())
  .then(videos => {
    const container = document.querySelector('.row');
    videos.forEach(video => {
      // Create a new HTML element for the video thumbnail
      const thumbnail = document.createElement('div');
      thumbnail.className = 'col-md-4';
      thumbnail.innerHTML = `
        <div class="card">
          <a href="${video.url}">
            <img src="${video.thumbnailUrl}" class="card-img-top" alt="${video.key}">
          </a>
          <div class="card-body">
            <h5 class="card-title">${video.key}</h5>
          </div>
        </div>
      `;
      // Append the thumbnail element to the container
      container.appendChild(thumbnail);
    });
  })
  .catch(error => console.error(error));