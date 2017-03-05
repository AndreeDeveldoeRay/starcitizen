/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-11T00:44:38+01:00
* @Email:  me@andreeray.se
* @Filename: Entry.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-04T13:59:34+01:00
*/



var React    = require('react'),
    ReactDOM = require('react-dom'),
    Main     = require('Main'),
    Temp     = require('Temp'),
    About    = require('About'),
    Schedule    = require('Schedule'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router')

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

//app css
require('style!css!sass!styles')


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Temp}/>
            <Route path="about" component={About}/>
            <Route path="schedule" component={Schedule}/>
        </Route>
    </Router>,
    document.getElementById('app')
)
