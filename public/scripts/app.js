//Variable global que representa al módulo
var sacra_luna_ecommerce = 
angular.module(
    'sacra_luna_ecommerce', 
    //Dependency modules
    ['ngRoute']);

sacra_luna_ecommerce.controller('appCtrl', appCtrl);

function appCtrl($scope) {
    $( "#main-menu" ).menu();
    
    //$scope.message = 'Everyone come and see how good I look!';
}

