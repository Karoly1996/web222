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

document.addEventListener('DOMContentLoaded', function () {
    // Getting nav element by id 
    let menu = document.getElementById('menu');

    artists.forEach(artist => {
        // Create button element
        let button = document.createElement('button');
        button.textContent = artist.name;

        button.addEventListener('click', function () {
            // Show the songs for the artist
            showSongsForArtist(artist); 
        });
        menu.appendChild(button);
    });
    showSongsForArtist(artists[0]);
});

function showSongsForArtist(artist) {
    let selectedArtist = document.getElementById('selected-artist');
    selectedArtist.textContent = artist.name;

    let artistLinks = artist.urls.map(link => {
        return `<a href="${link.url}" target="_blank">${link.name}</a>`;
    }).join (' | ');

    // adding links to the artist
    selectedArtist.innerHTML += `(${artistLinks})`;

    let songsContainer = document.getElementById('songs');
    songsContainer.innerHTML = '';

    // filter songs for artist and make sure to include explicit 
    let filterSongs = songs.filter(song => song.artistId === artist.artistID && !song.explicit);


    filterSongs.forEach(song => {
        let row = document.createElement('tr');
        row.addEventListener('click', function () {
            // log the clicked song
            console.log(song); 
        });

        // create cells for song title, year, duration 
        let titleCell = document.createElement('td');
        titleCell.textContent = song.title;

        let yearCell = document.createElement('td');
        yearCell.textContent = song.year;

        let durationCell = document.createElement('td');
        durationCell.textContent = formatDuration(song.duration);

        // convert the duration 
        function formatDuration(seconds) {
            let minutes = Math.floor(seconds / 60);
            let remainingSeconds = seconds % 60;
            return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
        }

        let linkCell = document.createElement('td');
        let link = document.createElement('a');
        link.href = song.url;
        link.target = '_blank';
        link.textContent = song.title;
        linkCell.appendChild(link);

        //append cells to row
        row.appendChild(titleCell);
        row.appendChild(yearCell);
        row.appendChild(durationCell);
        row.appendChild(linkCell);

        songsContainer.appendChild(row);
    });
} // end of function 

// For debugging, display all of our data in the console. You can remove this later.
console.log({ artists, songs }, "App Data");

