var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.all(function forceWithoutWWW(req, res, next) {
	if (req.hostname.match(/^www/) !== null ) {
		res.redirect(req.protocol + '://' + req.hostname.replace(/^www\./, '') + req.url);
	} else {
		next();
	}
});

if (process.env.NODE_ENV === 'development') {
	var webpackDevMiddleware = require('webpack-dev-middleware');
	var webpackHotMiddleware = require('webpack-hot-middleware');
	var webpack = require('webpack');
	var config = require('./webpack.config');
	var compiler = webpack(config);

	app.use(webpackDevMiddleware(compiler, {
		noInfo: true,
		filename: 'bundle.js',
		publicPath: config.output.publicPath,
		historyApiFallback: true,
		stats: { colors: true },
		hot: true,
	}));

	app.use(webpackHotMiddleware(compiler, {
		log: console.log,
		path: '/__webpack_hmr',
		heartbeat: 10 * 1000,
	}));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'index.html'));
	});

} else if (process.env.NODE_ENV === 'integration' || process.env.NODE_ENV === 'production') {
	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname, 'public/index.html'));
	});

	app.use(express.static(path.join(__dirname, 'public')));
}

app.listen(PORT, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.info('===> Listening on port %s. (soosap-me)', PORT);
	}
});
