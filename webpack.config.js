// -*- coding: utf-8 -*-
var path = require('path');
var webapck = require('webpack');


module.exports = {
    entry: {
        'index': './src/index.js',
    },
    output: {
        path: path.join(__dirname, 'var'),
        filename: '[name].bundle.js',
    },
    modules: {
        loaders: [
            {test: '/\.jsx?$/', exclude: /(node_modules|bower_components)/, loader: 'babel?optional[]=runtime'},
        ],
    },
};
