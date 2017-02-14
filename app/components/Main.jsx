var React = require('react'),
    Nav = require('Nav'),
    Clock = require('Clock'),
    Radio = require('Radio')

var Main = (props) => {
    return (
        <div className="component" id="main" style={{border: '1px solid red'}}>
            <Radio/>
            <Clock/>
            <Nav/>
            {props.children}

        </div>
    )
}

module.exports = Main
