var http = require('http');
var winston = require('winston');
var logger = new (winston.Logger)({
	level:'info',
	transports: [
	new (winston.transports.Console)()
	]
});
var appConst = require('../constants');

module.exports = function(app, cb) {
	var server = http.Server(app);

	// Runing the server
	server.listen(appConst.PORT, function() {
		logger.info('[SERVER] Listening on port ' + appConst.PORT);
	});

	if (cb) {
		return cb();
	}
};