#!/usr/bin/liquidsoap

# Log
set("log.file.path","/var/log/liquidsoap/talks.log")
set("log.stdout",true)

# playlist
playlist = playlist("/home/develdoe/starcitizen/radio/talks/playlist.m3u")
security = single("/home/develdoe/starcitizen/radio/offline.mp3")
radio = playlist
source = fallback(track_sensitive = false, [radio, security])

output.icecast(%mp3(bitrate = 128),
    host = "localhost",
    port = 8000,
    password = "JI21ko87.",
    mount = "talks",
    source
)
