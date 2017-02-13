var axios = require('axios')

const API_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=48ba5cd6c56d934ef8fa607ba4339f45'

var Api = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location)
        var requestUrl = `${API_URL}&q=${encodedLocation}`

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message)
            } else {
                return res.data.main.temp
            }
        }, function (res) {
            throw new Error(res.data.message)
        })
    }
}

module.exports = Api
