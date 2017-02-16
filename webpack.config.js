var webpack = require('webpack')

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './app/entry.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main:        'app/components/Main',
            TopBar:      'app/components/TopBar',
            Logo:        'app/components/Logo',
            Home:        'app/components/pages/home/Home',
            ModalError:  'app/components/modals/Error',
            Input:       'app/components/pages/home/Input',
            Output:      'app/components/pages/home/Output',
            About:       'app/components/pages/about/About',
            Schedule:    'app/components/pages/schedule/Schedule',
            Clock:       'app/components/clock/Clock',
            Radio:       'app/components/radio/Radio',
            RadioStream: 'app/api/radio/RadioStream',
            Api:         'app/api/Api'
        },
        extensions: ['','.js','.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react','es2015','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheep-module-eval-source-map'
}
