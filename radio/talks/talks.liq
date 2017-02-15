#!/usr/bin/liquidsoap

# Log
set("log.file.path","/var/log/liquidsoap/talks.log")
set("log.stdout",true)

# playlist
playlist = playlist(mode="normal","/home/develdoe/starcitizen/radio/talks/playlist.m3u",reload_mode="watch")
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

output.icecast(%mp3(bitrate = 128),
    host = "localhost",
    port = 8000,
    password = "JI21ko87.",
    mount = "talks",
    source
)
