var React = require('react'),
    ReactDOM = require('react-dom'),
    Main  = require('Main'),
    Home = require('Home'),
    About = require('About'),
    {Route, Router, IndexRoute, hashHistory} = require('react-router')


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}/>
            <Route path="about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('app')
)
