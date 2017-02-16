var React = require('react'),
    TopBar = require('TopBar'),
    Clock = require('Clock'),
    Radio = require('Radio')

var Main = (props) => {
    return (
        <div className="component" id="main" style={{border: '1px solid red'}}>
            <Radio/>
            <Clock/>
            <TopBar/>
            {props.children}
        </div>
    )
}

module.exports = Main
