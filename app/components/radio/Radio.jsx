var React       = require('react'),
    RadioStream = require('RadioStream')

var Radio = React.createClass({

    getInitialState: function () {
        return {
            audio: new Audio(),
            state: 'pause',
            channel: '',
            title: '',
            getTitleId: 0
        }
    },

    componentDidMount: function (e) {
        var that = this

        this.state.audio.addEventListener('playing', function(e) {
            var {getTitleId} = that.state

            that.setState({
                state: 'playing'
            })

            var getTitle = function () {
                RadioStream.getTitle(that.state.channel).then(function (title) {
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

            if(getTitleId){
                clearInterval(getTitleId);
            }

            that.setState({
                title: 'buffering...'
            })
        }, false)

        this.state.audio.addEventListener('pause', function(e) {
            var {getTitleId} = that.state

            if(getTitleId){
                clearInterval(getTitleId);
            }

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
            if (state === 'pause' && channel === '') {
                return <button onClick={play} className="play" disabled>Play</button>
            } else if (state === 'pause'  ) {
                return <button onClick={play} className="play">Play</button>
            } else  {
                return <button onClick={stop} className="play active">Stop</button>
            }
        }

        return (
            <div className="component" id="radio" style={{ border: '1px solid green', background:'rgba(0,255,255,0.5)', height: '10%' }}>
                {render()}
                <button onClick={changeChannel}>talks</button>
                <button onClick={changeChannel}>third</button>
                <button onClick={changeChannel}>skiff</button>
                <button onClick={changeChannel}>antilaz</button>
                <button onClick={changeChannel}>murray</button>
                <button onClick={changeChannel}>drift</button>
                <span>{channel} : {title}</span>
            </div>
        )
    }

})

module.exports = Radio
