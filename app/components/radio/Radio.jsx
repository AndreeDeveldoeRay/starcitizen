var React       = require('react'),
    RadioStream = require('RadioStream')

var Radio = React.createClass({

    getInitialState: function () {
        return {
            audio: new Audio(),
            state: 'pause',
            getTitleId: 0
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
                getTitleId: 0,
                title: undefined,
                channel: undefined
            })
        }, false)

    },

    play: function () {

        var that = this


        var {audio, channel} = that.state

        if (channel === undefined) {
            that.setState({
                channel: 'talks'
            }, function afterChannelChange(){
                audio.src = RadioStream.getStream(channel)
            })
        } else {
            audio.src = RadioStream.getStream(channel)
        }

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
            if (state === 'pause' && channel === undefined) {
                return <button onClick={play} className="play button tiny" disabled>Play</button>
            } else if (state === 'pause'  ) {
                return <button onClick={play} className="play button tiny" >Play</button>
            } else  {
                return <button onClick={stop} className="play active button tiny">Stop</button>
            }
        }

        return (
            <div id="radio" style={{background:'#252525', color: 'white'}}>
                <div className="row">
                    <div className="columns large-1 medium-6 small-1">
                        {render()}
                    </div>
                    <div className="columns large-8 medium-6 small-2">
                        <span style={{fontSize:'12px'}}>{title}</span>
                    </div>
                    <div className="columns large-3 medium-6 small-9">
                        <button onClick={changeChannel} className="button tiny ">talks</button>
                        <button onClick={changeChannel} className="button tiny ">pop</button>
                        <button onClick={changeChannel} className="button tiny ">combat</button>
                        <button onClick={changeChannel} className="button tiny ">racing</button>
                        <button onClick={changeChannel} className="button tiny ">lounge</button>
                    </div>
                </div>
            </div>
        )
    }

})

module.exports = Radio
