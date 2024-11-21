// // manipulation using splice
// to filter the list of active users
// const users = [
//   {
//     id: 1,
//     isActive: true,
//     name: "Segun",
//   },
//   {
//     id: 2,
//     isActive: false,
//     name: "Mofe",
//   },
//   {
//     id: 3,
//     isActive: true,
//     name: "Ade",
//   },
// ];
// // To remove inactive users combining 2 methods

// // 1) Find the index of the user to be removed
// const indexToRemove = users.findIndex((user) => {
//   return user.id === 2 && user.isActive === false;
// });

// // 2) using splice to remove the user that was found
// if (indexToRemove !== -1) {
//   users.splice(indexToRemove, 1);
// }
// console.log(`All user after splice  :`, users);
// console.log(`Active users ONLY after splice: `, indexToRemove);

// case study: You are developing a playlist feature for a music streaming app. Users can add and delete songs to their playlists. Each playlists is an array of song objects. You have to implememnt features that allow user to delete a song, move a song UP or DOWN the list, and insert a song at a particular index.

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
];

// find song using Id
// const songIndexToRemove = playlists.findIndex((playlists) => {
//   return playlists.id === 1;
// });
// console.log(songIndexToRemove);
// Remove the record using splice
// if (songIndexToRemove !== -1) {
//   playlists.splice(songIndexToRemove, 1);
// }

// console.log(`New playist after delete :`, playlists);

// moving the song to another position
const indexToMove = playlists.findIndex((playlists) => {
  return playlists.id === 1;
});
if (indexToMove !== -1) {
  const [songToMove] = playlists.splice(indexToMove, 1);
  //   console.log(songToMove);
  playlists.splice(2, 0, songToMove);
}
// console.log(playlists);

// to insert new record
const newID = playlists.length + 1;
const newSong = { id: newID, title: "title 4", artist: "artist 4" };
playlists.splice(newID, 0, newSong);
console.log(playlists);
