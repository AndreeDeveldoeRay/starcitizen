var React = require('react'),
    Nav = require('Nav'),
    Clock = require('Clock'),
    Radio = require('Radio')

var Main = (props) => {
    return (
        <div className="component" id="main" style={{border: '1px solid red'}}>
            <Clock/>
            <Nav/>
            {props.children}
            <Radio/>
        </div>
    )
}

module.exports = Main
