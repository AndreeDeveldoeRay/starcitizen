var React = require('react'),
    Input = require('Input'),
    Output = require('Output'),
    Api = require('Api')

var Home  = React.createClass({
    getInitialState: function () {
        return{
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this

        that.setState({
            isLoading: true
        })

        Api.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function (errMessage) {
            alert(errMessage)
            that.setState({
                isLoading: false
            })
        })
    },
    render: function () {
        var {isLoading, temp, location} = this.state

        function renderMessage () {
            if (isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (temp && location) {
                return <Output temp={temp} location={location}/>
            }
        }

        return (
            <div id="home">
                <h2>Home</h2>
                <Input onSearch={this.handleSearch}/>
                {renderMessage()}
            </div>
        )
    }
})

module.exports = Home
