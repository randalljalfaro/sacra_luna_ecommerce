sacra_luna_ecommerce.controller('productsCtrl', productsCrtl);


function productsCrtl($scope) {
	$scope.onMenuCreateClick = onMenuCreateClick; 
	$scope.onMenuViewClick = onMenuViewClick; 

	function onMenuCreateClick(){
		$scope.view_product=false;
		$( "#create_product" ).dialog({
			modal: true
		});
		$scope.create_product=true;
	}
	function onMenuViewClick(){
		$scope.create_product=false;
		$scope.view_product=true;
	}
}
