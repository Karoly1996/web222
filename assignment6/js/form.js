document.addEventListener("DOMContentLoaded", function () {
  const addSongButton = document.getElementById("addSong");
  const exampleSongsContainer = document.getElementById(
    "exampleSongsContainer",
  );

  addSongButton.addEventListener("click", function () {
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "exampleSongs[]";
    newInput.required = true;

    exampleSongsContainer.appendChild(newInput);
  });
});
