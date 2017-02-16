var React = require('react')

var About = (props) => {
    return (
        <div id="about" >
            <h2>About</h2>
            <p>
                As you might see, this site is in no means finished.
            </p>
            <p>
                I am working on different features but I haven't even decided on what I want to include.
            </p>
            <p>
                At the moment I am working on the radio feature.
                The idea behind it is that it will be a place for players to listen to while playing the game.
            </p>
            <p>
                Next I want to add a feed that includes the podcasts that plays in the radio. If you listen to the
                radio then you should only get the latest podcasts. This should show up in a stream on the frontpage, and also
                a archive for older.
            </p>
            <p>
                After that implementation I will add video to the site. They shold also show up in a stream on the site.
            </p>
        </div>
    )
}

module.exports = About
