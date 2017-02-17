var React = require('react'),
    {Link, IndexLink} = require('react-router')

var TopBar  = React.createClass( {
    onSearch: function (e) {
        e.preventDefault()
        console.log(e)
    },
    render: function () {
        return (<div>
            <div className="top-bar" id="top-bar">
                <div className="top-bar-left">
                    <ul className="menu" >
                        <li><IndexLink activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/">Home</IndexLink></li>
                        <li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/about">About</Link></li>
                        <li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/schedule">Schedule</Link></li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                    <ul className="menu">
                        <li><input type="search" placeholder="Search weather by city"/></li>
                        <li><button type="button" className="button">Search</button></li>
                    </ul>
                    </form>
                </div>
            </div>
        </div>)
    }
})

module.exports = TopBar
