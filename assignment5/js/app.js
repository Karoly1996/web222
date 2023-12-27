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
 *      Name:       <Karoly Nemeth>
 *      Student ID: <021949144>
 *      Date:       <Monday, Oct 23, 2023>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

// <!-- Karoly Nemeth | 021949144 | knemeth@myseneca.ca -->

// eventlistener for DOM content loading
document.addEventListener("DOMContentLoaded", function () {
  let menu = document.getElementById("menu");
  let cardsContainer = document.getElementById("cards-container");

  // create buttons for each artist and add it to menu
  artists.forEach((artist) => {
    let button = document.createElement("button");
    button.textContent = artist.name;

    // add eventlistener to each button to show songs
    button.addEventListener("click", function () {
      showSongsForArtist(artist, cardsContainer);
    });

    menu.appendChild(button);
  });

  showSongsForArtist(artists[0], cardsContainer);
});

// function to create a card for song
function createSongCard(song) {
  const card = document.createElement("div");
  card.classList.add("card");

  // image element for song image
  const songImg = document.createElement("img");
  songImg.src = song.imageUrl;
  songImg.classList.add("card-image");

  // container for card content
  const cardContent = document.createElement("div");
  cardContent.classList.add("card-content");

  // h2 element for the song title
  const songTitle = document.createElement("h2");
  songTitle.textContent = song.title;

  // Create container for year and duration
  const songDetails = document.createElement("div");
  songDetails.classList.add("song-details");

  // Create year
  const songYear = document.createElement("span");
  songYear.classList.add("song-info");
  songYear.innerHTML = `<strong>Year:</strong> ${song.year}`;

  // Create duration
  const songDuration = document.createElement("span");
  songDuration.classList.add("song-info");
  songDuration.innerHTML = `<strong>Duration:</strong> ${formatDuration(
    song.duration,
  )}`;

  // appending everythinng to card container
  cardContent.appendChild(songTitle);
  cardContent.appendChild(songYear);
  cardContent.appendChild(songDuration);
  cardContent.appendChild(songDetails);

  card.appendChild(songImg);
  card.appendChild(cardContent);

  // even listener for the song in a new tab
  card.addEventListener("click", function () {
    window.open(song.url, "_blank");
  });
  return card;
}

function showSongsForArtist(artist, cardsContainer) {
  let selectedArtist = document.getElementById("selected-artist");
  selectedArtist.textContent = artist.name;

  let artistLinks = artist.urls.map((link) => {
    return `<a href="${link.url}" target="_blank">${link.name}</a>`;
  });

  selectedArtist.innerHTML += `(${artistLinks})`;
  cardsContainer.innerHTML = "";

  let filterSongs = songs.filter(
    (song) => song.artistId === artist.artistID && !song.explicit,
  );

  filterSongs.forEach((song) => {
    let card = createSongCard(song);
    cardsContainer.appendChild(card);
  });
}

function formatDuration(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

// function showSongsForArtist(artist) {
//   let selectedArtist = document.getElementById("selected-artist");
//   selectedArtist.textContent = artist.name;

//   let artistLinks = artist.urls.map((link) => {
//     return `<a href="${link.url}" target="_blank">${link.name}</a>`;
//   });

//   // adding links to the artist
//   selectedArtist.innerHTML += `(${artistLinks})`;

//   let songsContainer = document.getElementById("songs");
//   songsContainer.innerHTML = "";

//   // filter songs for artist and make sure to include explicit
//   let filterSongs = songs.filter((song) => song.artistId === artist.artistID && !song.explicit);

//   filterSongs.forEach((song) => {
//     let row = document.createElement("tr");
//     row.addEventListener("click", function () {
//       // log the clicked song
//       console.log(song);
//     });

//     // create cells for song title, year, duration
//     let titleCell = document.createElement("td");
//     titleCell.textContent = song.title;

//     let yearCell = document.createElement("td");
//     yearCell.textContent = song.year;

//     let durationCell = document.createElement("td");
//     durationCell.textContent = formatDuration(song.duration);

//     // convert the duration
//     function formatDuration(seconds) {
//       let minutes = Math.floor(seconds / 60);
//       let remainingSeconds = seconds % 60;
//       return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
//     }

//     let linkCell = document.createElement("td");
//     let link = document.createElement("a");
//     link.href = song.url;
//     link.target = "_blank";
//     link.textContent = song.title;
//     linkCell.appendChild(link);

//     //append cells to row
//     row.appendChild(titleCell);
//     row.appendChild(yearCell);
//     row.appendChild(durationCell);
//     row.appendChild(linkCell);

//     songsContainer.appendChild(row);
//   });
// } // end of function

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");
