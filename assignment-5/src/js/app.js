/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <KOJO ANYANE OBESE>
 *      Student ID: <137653226>
 *      Date:       <23RD OCTOBER 2023>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;
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
  
          const img = document.createElement("div");
          img.className = "image-box";
          img.innerHTML = `<img src = "${song.UrlImage}" alt="${song.title}" >`;
          card.appendChild(img);

          const play = document.createElement("div");
          play.className = "icon-box";
          play.innerHTML =`<i class="fa-solid fa-play"></i>`;
          card.appendChild(play);
  
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
  