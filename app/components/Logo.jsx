var React = require('react')

var Logo = (props) => {
    return (
        <div className="row" id="logo">
              <div className="medium-4 columns">
                <img src="http://placehold.it/450x183&text=LOGO" alt="company logo"/>
              </div>
              <div className="medium-8 columns">
                <img src="http://placehold.it/900x175&text=Responsive Ads - ZURB Playground/333" alt="advertisement for deep fried Twinkies"/>
              </div>
        </div>
    )
}

module.exports = Logo
