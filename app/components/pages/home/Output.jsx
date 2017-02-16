var React = require('react')

var Output = ({temp, location}) => {
    return (
        <div className="component" id="home-output" >
            <h4 className="text-center">It is {temp} in {location}</h4>
        </div>
    )
}

module.exports = Output
