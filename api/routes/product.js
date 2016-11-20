var productController = require('../controllers/product');

module.exports = function(router, app) {
	router.route('/create').post(productController.create);
	router.route('').get(productController.getAll);

	/*router.route('/modify')
	.put(productController.modify);

	router.route('/delete/:product_id')
	.delete(productController.deleteProduct);*/



	app.use('/product', router);
};
