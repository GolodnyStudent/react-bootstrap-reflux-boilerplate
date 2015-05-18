var webpack = require('webpack');
var path = require('path');

var bower_dir = path.join(__dirname, 'bower_components');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
    addVendor: function (name, path, parse) {
        this.resolve.alias[name] = path;
        if(!parse){
            this.module.noParse.push(path);
        }
    },
    context: __dirname,
    entry: {
        app: ['webpack/hot/dev-server', './app/main.js']
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'react-router' : path.resolve(bower_dir, 'react-router/build/umd/ReactRouter.js'),
            'react-bootstrap': path.resolve(bower_dir, 'react-bootstrap/react-bootstrap.js'),
            'classnames' : path.resolve(bower_dir, 'classnames/index.js')
        }
    },
    module: {
        noParse: [],
        loaders: [
        {
            test: /bootstrap\/js\//,
            loader: 'imports?jQuery=jquery'
        }, {
            test: /\.js$/,
            loader: 'jsx-loader?harmony',
            exclude: [bower_dir, node_modules_dir]
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        },{
            test: /\.scss$/,
            loader: 'style!css!sass!'
        }, {
            test: /\.png$/,
            loader: 'url-loader?limit=100000'
        }, {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/font-woff"
        },  {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=application/octet-stream"
        },{
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: "file"
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: "url?limit=10000&minetype=image/svg+xml"
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('app', null, false)
    ],
    amd: { jQuery: true }
};

config.addVendor('react', path.resolve(bower_dir, 'react/react-with-addons.min.js'));

config.addVendor('reflux', path.resolve(bower_dir, 'reflux/dist/reflux.min.js'));
config.addVendor('jquery', path.resolve(bower_dir, 'jquery/dist/jquery.min.js'));

config.addVendor('bootstrap', path.resolve(bower_dir, 'bootstrap-sass-official/assets/javascripts/bootstrap.js'));
config.addVendor('bootstrap.scss', path.resolve(bower_dir, 'bootstrap-sass-official/assets/stylesheets/_bootstrap.scss'));

module.exports = config;
