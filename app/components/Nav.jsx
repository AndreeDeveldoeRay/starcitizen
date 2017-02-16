var React = require('react'),
    {Link, IndexLink} = require('react-router')

var Nav  = (props) => {
    return (
        <div className="component" id="nav" style={{position:'relative'}}>
            <ul class="menu">
                <li><IndexLink activeClassName="active" className="nav" to="/">Home</IndexLink></li>
                <li><Link activeClassName="active" className="nav" to="/about">About</Link></li>
            </ul>
        </div>
    )
}

module.exports = Nav
