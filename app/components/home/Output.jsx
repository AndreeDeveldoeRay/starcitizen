var React = require('react')

var Output = ({temp, location}) => {
    return (
        <div className="component" id="home-output" >
            <span>It is {temp} in {location}</span>
        </div>
    )
}

module.exports = Output
