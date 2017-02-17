var React = require('react'),
    Input = require('Input'),
    Output = require('Output'),
    Api = require('Api'),
    ModalError = require('ModalError')

var Home  = React.createClass({
    getInitialState: function () {
        return{
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this

        that.setState({
            isLoading: true,
            errorMessage: undefined
        })

        Api.getTemp(location).then(function (temp) {
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
    },
    render: function () {
        var {isLoading, temp, location, errorMessage} = this.state

        function renderMessage () {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>
            } else if (temp && location) {
                return <Output temp={temp} location={location}/>
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
                <h2 className="text-center page-title">Get Weather</h2>
                <Input onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        )
    }
})

module.exports = Home
