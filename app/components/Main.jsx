var React = require('react'),
    TopBar = require('TopBar'),
    Clock = require('Clock'),
    Radio = require('Radio')

var Main = (props) => {
    return (
        <div className="component" id="main">
            <Radio/>
            <Clock/>
            <TopBar/>
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

module.exports = Main
