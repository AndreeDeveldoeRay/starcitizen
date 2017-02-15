#!/usr/bin/liquidsoap

# Log
set("log.file.path","/var/log/liquidsoap/talks.log")
set("log.stdout",true)

# playlist
playlist = playlist("/home/develdoe/starcitizen/radio/talks/playlist.m3u")
security = single("/home/develdoe/starcitizen/radio/offline.mp3")
radio = playlist
source = fallback(track_sensitive = false, [radio, security])

source =
    rewrite_metadata(
     [("artist",'$(if $(display_artist),"$(display_artist)","$(artist)")'),
      ("comment",""),
      ("title", '$(if $(display_title),"$(display_title)","$(title)")'),
      ("album", '$(if $(display_album),"$(display_album)","$(album)")')],
     source)

# A function applied to each metadata chunk
 def append_title(m) =
   # Grab the current title
   title = m["title"]

   # Return a new title metadata
   [("title","#{title} - www.station.com")]
 end

# Apply map_metadata to s using append_title
s = map_metadata(append_title, source)

output.icecast(%mp3(bitrate = 128),
    host = "localhost",
    port = 8000,
    password = "JI21ko87.",
    mount = "talks",
    s
)
