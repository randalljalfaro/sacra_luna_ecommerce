var changeCase = require('change-case');
var express = require('express');
//var routes = require('require-dir')();
//var authMiddleware = require('../util/auth-middleware');

module.exports = function(app, cb) {
	/*router.use(authMiddleware);*/
	var routes = [
	'../routes/product'
	];
	for (var i = 0; i<routes.length; i++) {
		var router = express.Router();
		require(routes[i])(router, app);
	}

	if (cb) {
		cb();
	}
}