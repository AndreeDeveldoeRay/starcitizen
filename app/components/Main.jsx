/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-11T00:47:23+01:00
* @Email:  me@andreeray.se
* @Filename: Main.jsx
* @Last modified by:   andreeray
* @Last modified time: 2017-02-22T23:26:31+01:00
*/



var React  = require('react'),
    TopBar = require('TopBar'),
    Logo   = require('Logo'),
    Clock  = require('Clock'),
    Radio  = require('Radio')

var Main = (props) => {
    return (
        <div className="component" id="main">
            <Radio/>
            <Logo/>
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
