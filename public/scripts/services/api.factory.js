sacra_luna_ecommerce.factory('serverApi', serverApi);

serverApi.$inject = ['$http', 'serverUri', '$location'];

function serverApi($http, serverUri, $location) {
	return {
		products:{
			create: createProduct,
			get: getProducts
		}
		
	};

	/*var auth_token = localStorage.getItem('auth_dashboard')

	function tokenFlag() {
		if (!localStorage.getItem('auth_dashboard')) {
			$location.path('access/dashboard/login');

			return false;
		};

		return true;
	}*/

	function createProduct(product,callback) {
		//Autorización
		/*if (!tokenFlag()) {
			return;
		}*/

		//Validate first
		
		return $http({
			method: 'POST',
			cache: false,
			url: serverUri.uri + '/product/create',
			data : product
			/*headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('auth_dashboard')
			}*/
		}).then(callback);
	}

	function getProducts(callback) {
		/*if (!tokenFlag()) {
			return;
		}*/

		return $http({
			method: 'GET',
			cache: false,
			url: serverUri.uri + '/product'
			/*headers: {
				'Authorization': 'Bearer ' + localStorage.getItem('auth_dashboard')
			}*/
		}).then(callback);
	}

}