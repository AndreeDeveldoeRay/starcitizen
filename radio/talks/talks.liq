#!/usr/bin/liquidsoap
# Log dir
set("log.file.path","/var/log/liquidsoap/talks.log")


# playlist
playlist = playlist("/home/develdoe/starcitizen/radio/talks/playlist.m3u")

# If something goes wrong, we'll play this
security = single("/home/develdoe/starcitizen/radio/offline.mp3")

# Start building the feed with music
radio = playlist

# And finally the security
radio = fallback(track_sensitive = false, [radio, security])

 # Stream it out
output.icecast(%mp3,
  host = "localhost", port = 8000,
  password = "JI21ko87.", mount = "talks",
  icy_metadata="true",,description="Star Citizen radio",
  radio)
