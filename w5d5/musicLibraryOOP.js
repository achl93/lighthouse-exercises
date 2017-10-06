function Library(name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist(name) {
  this.name = name;
  this.tracks = [];
}

function Track(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Library.prototype.addPlaylist = function(playlist) {
  this.playlists.push(playlist);
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
  let sum = 0;
  let tracks = this.tracks;
  tracks.forEach(track => {
    sum += track.rating;
  });
  console.log(`The overall rating of this playlist is: ${sum / tracks.length}`);
}

Playlist.prototype.totalDuration = function() {
  let sum = 0;
  let tracks = this.tracks;
  tracks.forEach(track => {
    sum += track.length;
  });
  console.log(`The total duration of this playlist is: ${sum}`);
}

const myLib = new Library('Best Library', 'Andy');
const myPlaylist = new Playlist('Best Playlist');
const hotTrack = new Track('Fire', 5, 240);
myPlaylist.addTrack(hotTrack);
const lameTrack = new Track('Lame', 1, 260);
myPlaylist.addTrack(dankTrack);
console.log(myPlaylist);
myPlaylist.overallRating();
myPlaylist.totalDuration();
myLib.addPlaylist(myPlaylist);
console.log(myLib);