sacra_luna_ecommerce.config(function($routeProvider) {
    $routeProvider
    .when('/products', {
        templateUrl : 'views/products/index.tpl.html',
        controller  : 'productsCtrl'
    })
});