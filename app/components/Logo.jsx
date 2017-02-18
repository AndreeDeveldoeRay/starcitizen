var React = require('react')

var Logo = (props) => {
    return (
        <div className="row" id="logo">
              <div className="medium-4 columns">
                <img src="http://placehold.it/450x183&text=LOGO" alt="logo"/>
              </div>
              <div className="medium-8 columns">
                <img src="http://placehold.it/900x175&text=Image" alt="Image"/>
              </div>
        </div>
    )
}

module.exports = Logo
