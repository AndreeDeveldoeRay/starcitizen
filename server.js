/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-11T00:43:47+01:00
* @Email:  me@andreeray.se
* @Filename: server.js
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-04T13:43:59+01:00
*/



const   EXPRESS = require('express'),
        APP     = EXPRESS(),
        PORT = process.env.PORT || 3001

APP.use(function(req,res,next){
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname +  req.url)
    } else {
        next()
    }
})

APP.use(EXPRESS.static('public'))

APP.listen(PORT)
console.log('Port: ' + PORT)
