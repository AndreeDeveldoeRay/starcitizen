/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-11T00:57:01+01:00
* @Email:  me@andreeray.se
* @Filename: Home.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-05T15:05:27+01:00
*/



var React = require('react'),
    WeatherAPI = require('WeatherAPI'),
    LocationAPI = require('LocationAPI'),
    ModalError = require('ModalError')

var Temp  = React.createClass({
    getInitialState: function () {
        return{
            isLoading: false
        }
    },
    componentDidMount: function () {
        var that = this


        LocationAPI.getLocation().then(function(location){
            WeatherAPI.getTemp(location).then(function (temp) {
                that.setState({
                    location: location,
                    temp: temp,
                    isLoading: false
                })
            }, function (e) {
                that.setState({
                    isLoading: false,
                    errorMessage: e.message
                })
            })
        }, function (e) {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            })
        })


    },
    componentWillReceiveProps: function (newProps) {
        var location = newProps.location.query.location

        if (location && location.length > 0) {
            this.handleSearch(location)
            window.location.hash = '#/'
        }
    },
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location) {
                return (
                    <div className="component" id="home-output" >
                        <h4 className="text-center">It is {temp} in {location}</h4>
                    </div>
                )
            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ModalError message={errorMessage}/>
                )
            }
        }

        return (
            <div id="home">
                <h2 className="text-center page-title">Temp</h2>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
})

module.exports = Temp
