var React = require('react')

var Clock = React.createClass({

    getInitialState: function () {
        var date = new Date()
        return {
            time: date.toLocaleTimeString(this.getLang())
        }
    },

    getLang: function() {
        if (navigator.languages != undefined) return navigator.languages[0]
        else return navigator.language
    },

    myTimer: function () {
        var date = new Date()
        this.setState({
            time: date.toLocaleTimeString(this.getLang())
        })
    },

    componentWillMount: function () {
        setInterval(()=>{ this.myTimer() }, 1000)
    },

    render: function () {
        return (
            <div className="component" id="clock" style={{
                                                            padding: '0',
                                                            position: 'fixed',
                                                            top: '4',
                                                            left: '0',
                                                            width: '100%',
                                                            textAlign: 'center',lineHeight: '20px',
                                                            height: '50px'
                                                        }}>
                <span style={{
                        background: 'transparent',
                        color:'#111',
                        padding:'7px',
                        borderBottomLeftRadius: '3px',
                        borderBottomRightRadius: '3px',
                        fontSize:'12px'}}>{this.state.time}</span>
            </div>
        )
    }

})

module.exports = Clock
