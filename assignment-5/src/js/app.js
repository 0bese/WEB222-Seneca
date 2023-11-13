document.addEventListener("DOMContentLoaded", () => {
    function displayArtists() {
      const menu = document.querySelector("#menu");
      artists.forEach((artist, index) => {
        const button = document.createElement("button");
        button.textContent = artist.name;
        button.addEventListener("click", () => displayArtistDetails(index));
        menu.appendChild(button);
      });
    }
  
    function displayArtistDetails(artistIndex) {
      const artist = artists[artistIndex];
      const selectedArtist = document.querySelector("#selected-artist");
      selectedArtist.innerHTML = `${artist.name} (<a href="${artist.urls[0].url}" target="_blank">${artist.urls[0].name}</a>, <a href="${artist.urls[1].url}" target="_blank">${artist.urls[1].name}</a>)`;
  
      // Call the new function to display songs as cards
      displaySongs(artist);
    }
  
    // New function to display cards for the selected artist's songs
    function displaySongs(artist) {
      const container = document.querySelector("#container");
      container.innerHTML = "";
  
      songs
        .filter((song) => song.artistId === artist.artistId)
        .forEach((song) => {
          const card = document.createElement("div");
          card.className = "card";
  
          const img = document.createElement("img");
          img.src = song.UrlImage;
          img.alt = song.title;
          card.appendChild(img);
  
          const name = document.createElement("div");
          name.className = "name";
          name.innerHTML = `<h2>${song.title}</h2>`;
          card.appendChild(name);
  
          const details = document.createElement("h3");
        //   details.className = "card-details";
          details.innerHTML = `<h3>${artist.name}</h3>`;
          card.appendChild(details);
  
          card.addEventListener("click", () => window.open(song.url, "_blank"));
  
          container.appendChild(card);
        });
    }
  
    displayArtists();
  });
  