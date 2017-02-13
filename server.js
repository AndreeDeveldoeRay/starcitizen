var express = require('express'),
    app     = express()

app.use(express.static('public'))

app.listen(4000, function(){
    console.log('Express server is up on port: 4000')
})
