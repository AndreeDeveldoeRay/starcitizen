const   EXPRESS = require('express'),
        APP     = EXPRESS(),
        PORT = process.env.PORT || 4000

APP.use(function(req,res,next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + ':' + PORT +  req.url)
    } else {
        next()
    }
})

APP.use(EXPRESS.static('public'))

APP.listen(PORT)
console.log('Port: ' + PORT)
