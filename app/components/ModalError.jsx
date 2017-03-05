/**
* @Author: Andreee Ray <DevelDoe>
* @Date:   2017-02-16T12:52:23+01:00
* @Email:  me@andreeray.se
* @Filename: ModalError.jsx
* @Last modified by:   DevelDoe
* @Last modified time: 2017-03-04T13:53:57+01:00
*/



var React          = require('react'),
    ReactDOM       = require('react-dom'),
    ReactDOMServer = require('react-dom/server')

var ModalError = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        }
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {

        var {title, message} = this.props

        var modalMarkup = (
                <div id="modal-error" className="tiny reveal text-center" data-reveal="">
                    <h4>{title}</h4>
                    <p>{message}</p>
                    <p>
                        <button className="button hollow" data-close="">Okay</button>
                    </p>
                </div>
        )

        var $modal = $(ReactDOMServer.renderToString(modalMarkup))
        $(ReactDOM.findDOMNode(this)).html($modal)

        var modal = new Foundation.Reveal($('#modal-error'))
        modal.open()
    },
    render: function () {
        return (<div></div>)
    }
})

class Greeting extends React.Component {
  render() {
    return (
      <h1>Hello, {this.props.name}</h1>
    );
  }
}

module.exports = ModalError
