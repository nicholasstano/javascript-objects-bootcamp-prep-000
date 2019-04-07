var playlist = artistname[songTitle]




























/*
var playlist = {artistName: 'songTitle'}

/*function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}*/
//playlist starts at = [] and then becomes [artistName: SongTitle] and returns the playlist (destructive)
function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}
//playlist = [] and wants to add artistName: 'songTitle' into {} and playlist is not modified.
function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
*/
//removes the artistName from the playlist and returns the playlist without that artist.  (**Try to Console this)
















/* var playlist = {artist: `song`}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
}
*/














/* var playlist = {artistName: 'songtitle'}

function updatePlaylist(playlist, artist, song) {
  return Object.assign({}, playlist, { [artist]: song})
}

//creates a key-value pair of [artist]: song that returns them to a playlist.  (Have a lot of Q's here) 

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}

//removes the artist from the playlist and if that artist was the only artist in the playlist, the playlist would now be empty.

*/