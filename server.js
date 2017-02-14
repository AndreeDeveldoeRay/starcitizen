var express = require('express'),
    app     = express(),
    port = process.env.PORT || 4000

app.use(express.static('public'))

app.listen(port)
console.log('Running with the wolves @ ' + port)
