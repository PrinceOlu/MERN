const playlists = [
  {
    id: 1,
    title: "title 1",
    artist: "artist 1",
  },
  {
    id: 2,
    title: "title 2",
    artist: "artist 2",
  },
  {
    id: 3,
    title: "title 3",
    artist: "artist 3",
  },
  {
    id: 4,
    title: "title 4",
    artist: "artist 4",
  },
];

// find song using Id
const songIndexToRemove = playlists.findIndex((playlist) => {
  return playlist.id === 1;
});
// console.log(songIndexToRemove);
// Remove the record using splice
if (songIndexToRemove !== -1) {
  playlists.splice(songIndexToRemove, 1);
}

console.log(`New playist after delete :`, playlists);

// moving the song to another position
const indexToMove = playlists.findIndex((playlist) => {
  return playlist.id === 1;
});
if (indexToMove !== -1) {
  const [songToMove] = playlists.splice(indexToMove, 1);
  //   console.log(songToMove);
  playlists.splice(2, 0, songToMove);
}
// console.log(playlists);

// to insert new record
const newID = playlists.length + 1; //getting the number dynamically
const newSong = { id: newID, title: "title 4", artist: "artist 4" };
playlists.splice(newID, 0, newSong);
// console.log(playlists);
