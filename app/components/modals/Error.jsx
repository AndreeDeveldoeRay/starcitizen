var React = require('react')

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
        var modal = new Foundation.Reveal($('#modal-error'))
        modal.open()
    },
    render: function () {

        var {title, message} = this.props

        return (
            <div id="modal-error" className="tiny reveal text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">Okay</button>
                </p>
            </div>
        )
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
