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
                return (<div>
                        <button onClick={play} className="play button tiny" style={{margin: '10px',width: '52px',height: '52px',borderRadius:'100%',opacity: '1'}}>
                            <div id="play"></div>
                        </button>
                </div>)
            } else if(state === 'loadstart') {
                return (<div>
                    <button onClick={stop} style={{margin: '10px',width: '52px',height: '52px',borderRadius:'100%'}} className="play active button tiny">
                        <div id="pause"></div>

                    </button>
                </div>)
            } else {
                return (<div>
                    <button onClick={stop} style={{transform: 'rotate(180deg)',margin: '10px',width: '52px',height: '52px',borderRadius:'100%'}} className="play active button tiny">
                        <div id="pause"><div id="spectrum"></div></div>

                    </button>
                </div>)
            }
        }

        function spectrum() {
            if (state === 'playing') {
                return (<div>
                    <img  style={{height: '72px',width: '100%'}} src="/img/giphy1.gif"/>
                </div>)
            }
        }

        return (
            <div id="radio" style={{background:'#252525', color: 'white', height: '72px'}}>
                <div className="row" >
                    <div className="columns large-1 medium-1 small-3" >
                        {render()}
                    </div>
                    <div className="columns large-11 medium-11 small-9"  >
                        <div style={{ fontSize: '15px',fontWeight: 'bold', paddingTop: '15px'}}>Star Waves</div>
                        <div style={{ fontSize: '13px'}}>{title}</div>
                    </div>
                </div>
            </div>
        )
    }

})

module.exports = Radio
