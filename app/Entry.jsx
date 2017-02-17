var React    = require('react'),
    ReactDOM = require('react-dom'),
    Main     = require('Main'),
    Home     = require('Home'),
    About    = require('About'),
    Schedule    = require('Schedule'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router')

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation()

//app css
require('style!css!applicationStyles')


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
            <Route path="schedule" component={Schedule}/>
        </Route>
    </Router>,
    document.getElementById('app')
)
