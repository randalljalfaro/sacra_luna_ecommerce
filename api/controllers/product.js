var Product = require('../models/product');
var reqCb = require('../util/req-cb');

module.exports = {
	create: function(req, res, next) {
		console.log(req.body);
		var newProduct = new Product(req.body);

		newProduct.save(reqCb(res));
	},

	getAll: function(req, res, next) {
		Product.find()
			.exec(reqCb(res));
	},

	/*modify: function(req, res, next) {
		Product.findByIdAndUpdate(req.body._id, req.body, reqCb(res));
	},

	deleteProduct: function(req, res, next) {
		Product.findOneAndRemove({
			_id: req.params.product_id
		}, reqCb(res));
	}*/
};
