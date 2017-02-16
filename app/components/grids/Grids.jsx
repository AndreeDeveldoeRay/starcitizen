var React = require('react'),
    {Link} = require('react-router')

var Grids = (props) => {
    return (
        <div id="grids">
        <h2 className="text-center">grids</h2>
        <p>Testing out grids</p>
        <ol>
            <li><Link to="/?location=Gothenburg,se">Gothenburg, se</Link></li>
            <li><Link to="/?location=Rio">Rio</Link></li>
        </ol>
        </div>
    )
}

module.exports = Grids
