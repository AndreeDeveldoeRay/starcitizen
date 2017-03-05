/**
* @Author: Andreee "DevelDoe" Ray <andreeray>
* @Date:   2017-02-11T00:48:34+01:00
* @Email:  me@andreeray.se
* @Filename: TopBar.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-04T14:03:29+01:00
*/



var React = require('react'),
    {Link, IndexLink} = require('react-router')

var TopBar  = React.createClass( {
    onSearch: function (e) {
        e.preventDefault()

        var location = this.refs.inputSearch.value,
            encodLoc = encodeURIComponent(location)

        if (location.length > 0) {
            this.refs.inputSearch.value = ""
            window.location.hash = `#/?location=${location}`
        }
    },
    render: function () {
        return (<div>

            <div className="top-bar">
                <div className="row" >
                    <div className="columns large-10 medium-centered"  >
                        <div className="top-bar-left">
                            <ul className="menu" >
                                <li><IndexLink activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/">Temp</IndexLink></li>
                                <li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/about">About</Link></li>
                                <li><Link activeClassName="active" activeStyle={{fontWeight:'bold'}} to="/schedule">Schedule</Link></li>
                            </ul>
                        </div>
                        <div className="top-bar-right">
                            <form onSubmit={this.onSearch}>
                            <ul className="menu">
                                <li><input type="search" ref="inputSearch" placeholder="Search weather by city"/></li>
                                <li><button type="button" className="button">Search</button></li>
                            </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
})

module.exports = TopBar
