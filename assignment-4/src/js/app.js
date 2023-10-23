/**
 * WEB222 – Assignment 04
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
 *      Date:       <3RD NOVEMBER 2023>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

document.addEventListener('DOMContentLoaded', () => {
  const { artists, songs } = window;

  //creating button for dynamically allocated artists
  function displayArtists() {
    const menu = document.querySelector("#menu");
    artists.forEach((artist, index) => {
      const button = document.createElement("button");
      button.textContent = artist.name;
      button.addEventListener("click", () => displayArtistDetails(index));
      menu.appendChild(button);
    });
  }

  //displaying Selected Artist
  function displayArtistDetails(artistIndex) {
    const artist = artists[artistIndex];
    const selectedArtist = document.querySelector("#selected-artist");
    selectedArtist.innerHTML = `${artist.name} (<a href="${artist.urls[0].url}" target="_blank">${artist.urls[0].name}</a>, <a href="${artist.urls[1].url}" target="_blank">${artist.urls[1].name}</a>)`;
  
    const tbody = document.querySelector("#songs");
    tbody.innerHTML = "";
  
    songs.filter(song => song.artistId === artist.artistId).forEach((song) => {
      const tr = document.createElement("tr");
  
      const tdName = document.createElement("td");
      const anchor = document.createElement("a");
      anchor.href = song.url;
      anchor.textContent = song.title;
      anchor.target = "_blank";
      tdName.appendChild(anchor);
  
      const tdYear = document.createElement("td");
      tdYear.textContent = song.year;
  
      const tdDuration = document.createElement("td");
      tdDuration.textContent = `${Math.floor(song.duration / 60)}:${(song.duration % 60).toString().padStart(2, '0')}`;
  
      tr.appendChild(tdName);
      tr.appendChild(tdYear);
      tr.appendChild(tdDuration);
      tbody.appendChild(tr);
    });
  }

  displayArtists();
});


// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");
