var React       = require('react'),
    RadioStream = require('RadioStream')

var Radio = React.createClass({

    getInitialState: function () {
        return {
            audio: new Audio(),
            state: 'pause',
            channel: 'talks',
            getTitleId: 0,
            title: undefined
        }
    },

    componentWillMount: function (e) {
        var that = this

        this.state.audio.addEventListener('playing', function(e) {
            var {getTitleId} = that.state

            that.setState({
                state: 'playing'
            })

            var getTitle = function () {
                RadioStream.getTitle(that.state.channel).then(function (data) {
                    console.log("Listeners: " + data.listeners)
                    var title = data.title
                    that.setState({
                        title: title
                    })
                }, function(err) {
                    console.log('error',err)
                })
            }

            getTitle()

            getTitleId = window.setInterval(function(){
                getTitle()
            }, 20000);

            that.setState({
                getTitleId: getTitleId
            })
        }, false)

        this.state.audio.addEventListener('loadstart', function(e) {
            var {getTitleId} = that.state

            if (getTitleId) { clearInterval(getTitleId) }

            that.setState({
                title: 'buffering...',
                state: 'loadstart'
            })
        }, false)

        this.state.audio.addEventListener('pause', function(e) {
            var {getTitleId} = that.state

            if (getTitleId) { clearInterval(getTitleId) }

            that.setState({
                state: 'pause',
                getTitleId: 0
            })
        }, false)

    },

    play: function () {

        var that = this

        var {audio, channel} = that.state

        audio.src = RadioStream.getStream(channel)

        audio.play()

    },

    stop: function () {
        this.state.audio.pause()
    },

    changeChannel: function (e) {
        this.setState({
            channel: e.target.innerHTML
        }, function afterChannelChange(){
            this.play()
        })
    },

    render: function () {
        var {state, channel, title} = this.state

        var {play, stop, changeChannel} = this

        function render () {
            if (state === 'pause') {
                return (
                    <div style={{display: 'table-cell',verticalAlign: 'middle'}}>
                        <button onClick={play} className="play button tiny" style={{margin: '10px',width: '52px',height: '52px',borderRadius:'100%',opacity: '1'}}>Play</button>
                    </div>
                )
            } else  {
                return <button onClick={stop} style={{margin: '10px',width: '52px',height: '52px',borderRadius:'100%'}} className="play active button tiny">Stop</button>
            }
        }

        return (
            <div id="radio" style={{background:'#252525', color: 'white', height: '72px'}}>
                <div className="row" >
                    <div className="columns large-1 medium-1 small-2" style={{height: '72px'}}>
                        {render()}
                    </div>
                    <div className="columns large-11 medium-11 small-10" >
                        <span style={{lineHeight: '72px',fontWeight:'200', fontSize: '12px'}}>{title}</span>
                    </div>
                </div>
            </div>
        )
    }

})

module.exports = Radio
