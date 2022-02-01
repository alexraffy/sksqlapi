

const path = require('path');

module.exports = {
    mode: "production",
    entry: './build/main.js',
    output: {
        filename: 'sksqlapi.min.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'var',
        library: 'sksqlapi'
    },
    optimization: {
        minimize: true
    },
    resolve: {
        fallback: {
            "worker_threads": false,
            "perf_hooks": false
        }
    }

};