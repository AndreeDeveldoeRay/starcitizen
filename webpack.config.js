module.exports = {
    entry: './app/entry.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            Main:   'app/components/Main',
            Nav:    'app/components/Nav',
            Home:   'app/components/home/Home',
            Input:  'app/components/home/Input',
            Output: 'app/components/home/Output',
            About:  'app/components/about/About',
            Clock:  'app/components/clock/Clock',
            Radio:  'app/components/radio/Radio',
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
