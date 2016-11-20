var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({
	created_at: {
		type: Date,
		default: Date.now
	},
	name: {
		type: String,
		require: true,
		unique: true,
		trim: true
	},
	model: {
		type: String,
		require: true,
		unique: true,
		trim: true
	},
	stock: {
		type: Number,
	},
	ecommerce: {
		type: String,
		trim: true
	},
	type: {
		type: String,
		trim: true
	},
	variants : [
	{
		name : String,
		types : [String]
	}
	]
});
module.exports = mongoose.model('product', product);