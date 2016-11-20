var mongoose = require('mongoose');
var Promise = require('bluebird');
var appConst = require('../constants');
var db = mongoose.connection;
var dbConnected = null;

var winston = require('winston');
var logger = new (winston.Logger)({
	level:'info',
	transports: [
	new (winston.transports.Console)()
	]
});


module.exports = {
	connect: function(cb) {
		// Mogoose connetion to the data base
		if (appConst.DB_NAME) {
			// Data base on error connection
			db.on('error', console.error.bind(console, 'connection error:'));

			// Data base on open connection (when the connect success)
			db.once('open', function() {
				logger.info('[DB] Connected to DB');

				if (cb) {
					return cb();
				}
			});

			logger.info('[DB] Setting...');
			mongoose.Promise = Promise;
			dbConnected = mongoose.connect(appConst.DB_URI);
		
		} else {
			logger.info('[DB] Data base is not defined');
		}
	},

	disconnect: function() {
		dbConnected.disconnect();

		logger.info('[DB] Disconnect');
	}
}