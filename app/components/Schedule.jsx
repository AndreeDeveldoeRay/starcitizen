var React = require('react'),
    {Link} = require('react-router')

var Schedule = (props) => {
    return (
        <div id="schedule">
            <h2 className="text-center page-title">The Pipeline</h2>
            <p>Here you can get an overview of what's done, what I am implementing, and whats in the pipeline. </p>
            <h4>v 1</h4>
            <ul>
                <li style={{textDecoration:'line-through'}}> 0.1 Basic Structure</li>
                <li style={{fontWeight:'bold'}}> 0.2 Radio </li>
                <li> 0.3 Podcasts</li>
            </ul>
            <h4>v 2</h4>
            <ul>
                <li> 1.1 Videos</li>
            </ul>
        </div>
    )
}

module.exports = Schedule
