var React = require('react')

var Input = React.createClass({
    onFormSubmit: function (e) {
        e.preventDefault()

        var location = this.refs.location.value

        if (location.length > 0) {
            this.refs.location.value = ""
            this.props.onSearch(location)
        }
    },
    render: function () {
        return(
            <div className="component" id="home-input">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="location"/>
                    <button className="button expanded hollow">Get Input</button>
                </form>
            </div>
        )
    }
})
module.exports = Input
