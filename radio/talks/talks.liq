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

# This function is called when
# a new metadata block is passed in
# the stream.



# The 'display_artist' field is passed using annotate.
pattern =
  '$(if $(display_artist),"$(display_artist)","$(artist)")'
rewrite_metadata([("artist",pattern)],radio)

 # Stream it out
output.icecast(%mp3, host = "localhost", port = 8000, password = "JI21ko87.", mount = "talks", icy_metadata = "true", radio)
