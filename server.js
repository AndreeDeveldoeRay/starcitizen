const   EXPRESS = require('express'),
        APP     = EXPRESS(),
        PORT = process.env.PORT || 4000

APP.use(EXPRESS.static('public'))

APP.listen(PORT)
console.log('Port: ' + PORT)
