var jsonp = require('jsonp');

const RADIO_STREAM_URL = 'http://ssn-sw.com'

var PORT = '8000'

var RadioStream = {
    getStream: function (channel) {
        return `${RADIO_STREAM_URL}:${PORT}/${channel}`
    },
    getTitle: function (channel) {
        var requestUrl = `${RADIO_STREAM_URL}:${PORT}/json.xsl`,
            mountpoint = '/' + channel

        return new Promise(function(resolve,reject){
            jsonp(requestUrl,{name:'parseMusic'}, function(err, json){
                if(err){
                    reject('Api failure')
                } else {
                    resolve(json[mountpoint].title)
                }

            })
        })

    }

}

module.exports = RadioStream
