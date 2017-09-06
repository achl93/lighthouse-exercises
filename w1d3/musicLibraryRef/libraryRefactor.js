var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
  printPlaylists: function () {
    for (playlist in this.playlists) {
      var playlistName = this.playlists[playlist].name;
      var trackNum = this.playlists[playlist].tracks.length;
      console.log(playlist + ': ' + playlistName + ' - ' + trackNum + ' tracks');
      }
  },
  printTracks: function () {
    for (tracks in this.tracks) {
      var trackName = this.tracks[tracks].name;
      var trackArtist = this.tracks[tracks].artist;
      var trackAlbum = this.tracks[tracks].album;
      console.log(tracks + ': ' + trackName + ' by ' + trackArtist + ' (' + trackAlbum + ')');
    }
  },
  printPlaylist: function (playlistId) {
    for (playlist in this.playlists) {
      var playlistName = playlist;
      var tracksList = this.playlists[playlist].tracks;
      var trackNum = this.playlists[playlist].tracks.length;
      if (playlist === playlistId) {
        console.log(playlist + ': ' + playlistName + ' - ' + trackNum + ' tracks');
        for (trackIndex in this.tracks) {
          for (var i = 0; i < tracksList.length; i++) {
            if (trackIndex === tracksList[i]) {
              var trackName = this.tracks[trackIndex].name;
              var trackArtist = this.tracks[trackIndex].artist;
              var trackAlbum = this.tracks[trackIndex].album;
              console.log(trackIndex + ': ' + trackName + ' by ' + trackArtist + ' (' + trackAlbum + ')');
            }
          }
        }
      }
    }
  },
  addTrackToPlaylist: function (trackId, playlistId) {
    this.playlists[playlistId].tracks.push(trackId);
  },
  uid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function (name, artist, album) {
    var idTag = this.uid();
    this.tracks[idTag] = {
      id: idTag,
      name: name,
      artist: artist,
      album: album
    };
    console.log(this.tracks);
  },
  addPlaylist: function (name) {
    var idTag = this.uid();
    this.playlists[idTag] = {
      id: idTag,
      name: name,
      tracks: []
    };
    console.log(this.playlists);
  },
  printSearchResults: function(query) {
    var re = new RegExp(query, "i");
    for (tracks in this.tracks) {
      var trackName = this.tracks[tracks].name.toLowerCase();
      var trackArtist = this.tracks[tracks].artist.toLowerCase();
      var trackAlbum = this.tracks[tracks].album.toLowerCase();
      if (!trackName.search(re)) console.log("Matching track: " + trackName);
      if (!trackArtist.search(re)) console.log("Matching artist: " + trackArtist);
      if (!trackAlbum.search(re)) console.log("Matching album: " + trackAlbum);
    }
  }
}

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.addTrack("Billlllllll", "Johnnnnnnn", "Album");
library.addPlaylist("Test");
library.printPlaylists();
library.printTracks();
library.printSearchResults("MOdel");