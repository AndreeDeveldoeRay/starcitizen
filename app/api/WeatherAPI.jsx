/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-11T01:03:44+01:00
* @Email:  me@andreeray.se
* @Filename: WeatherApi.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-04T13:41:38+01:00
*/



var axios = require('axios')

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=48ba5cd6c56d934ef8fa607ba4339f45'

var WeatherAPI = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${API_URL}&q=${encodedLocation}`

        return axios.get(requestUrl).then(function (res) {
            return res.data.main.temp
        }, function (res) {
            throw new Error(res.message)
        })
    }
}

module.exports = WeatherAPI
