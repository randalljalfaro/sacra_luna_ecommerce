var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var variant = new Schema({
	name: {
		type: String,
		require: true,
		trim: true
	},
	types : [String]
});

module.exports = mongoose.model('variant', variant);