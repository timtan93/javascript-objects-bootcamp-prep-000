var playlist = { artistName: "songTITLE"}

function updatePlaylist (playlist, artistName, songTitle){
  playlist[artistName] = 'songTitle'
  return playlist
}

function removeFromPlaylist (playlist, artistName){
delete playlist[artistname]
return playlist 
}