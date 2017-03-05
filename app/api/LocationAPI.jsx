/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-11T01:03:44+01:00
* @Email:  me@andreeray.se
* @Filename: WeatherApi.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T15:06:41+01:00
*/



var axios = require('axios')

const API_URL = 'http://ipinfo.io'

var LocationAPI = {
    getLocation: function () {
        return axios.get(API_URL).then(function (res) {
            var location = `${res.data.city}, ${res.data.country}`
            return location
        }, function (res) {
            throw new Error(res.message)
        })
    }
}

module.exports = LocationAPI
