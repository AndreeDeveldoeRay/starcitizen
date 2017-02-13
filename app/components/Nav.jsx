var React = require('react'),
    {Link, IndexLink} = require('react-router')

var Nav  = (props) => {
    return (
        <div className="component" id="nav" style={{border: '1px solid green',background:'rgba(0,255,0,0.1)',position:'relative'}}>
            <IndexLink activeClassName="active" className="nav" activeStyle={{fontWeight:'bold'}} to="/">Home</IndexLink>
            <Link activeClassName="active" className="nav" activeStyle={{fontWeight:'bold'}} to="/about">About</Link>
        </div>
    )
}

module.exports = Nav
