sacra_luna_ecommerce
.directive('createProduct', createProduct)
.controller('createProductCtrl', createProductCtrl);

createProductCtrl.$inject = [
'$scope',
'serverApi'
];

function createProduct() {
	return {
		restrict: 'E',
		controller: 'createProductCtrl',
		templateUrl: 'views/products/information.tpl.html'
	}
}

function createProductCtrl($scope, serverApi) {
	$scope.onCreateClick = onCreateClick;
	$scope.onAddVariantClick = onAddVariantClick;

	function onAddVariantClick(){
		var nameLbl = $("<label></label>").text("Name:");
		var nameInput = $("<input></input>")
		.attr("type", "text").addClass("input-variant-name");

		var varTypesLbl = $("<label></label>").text("Types:");
		var varTypesBtn = $("<button></button>")
		.text("Add type").click(onAddTypeClick);
		var varTypesList = $("<ul></ul>");

		var row = $("<div></div>").addClass("variant-row");
		row.append(
			$("<div></div>")
			.append(nameLbl)
			.append(nameInput)
			);
		row.append(
			$("<div></div>")
			.append(varTypesLbl)
			.append(varTypesBtn)
			.append(varTypesList)
			);

		$(".variants-content").append(row);

		function onAddTypeClick(){
			var nameInput = $("<input></input>")
			.attr("type", "text").addClass("input-variant-type");
			varTypesList.append($("<li></li>").append(nameInput));
		}
	}

	function onCreateClick(){
		var variants = [];
		var variantRows = $("#create_product .variant-row");
		variantRows.each(function(){
			var variant = {};
			variant.name = $(this).find(".input-variant-name").val();
			variant.types = [];
			$(this).find(".input-variant-type").each(function(){
				variant.types.push($(this).val());
			});
			variants.push(variant);
		});
		var newProduct = {
			name:$("#input-product-name").val(), 
			model:$("#input-product-model").val(),
			stock:$("#input-product-stock").val(), 
			ecommerce:$("#input-product-ecommerce").val(),
			type:"stockable", 
			variants : variants
		};
		/*serverApi.products.create(
		{
			name:$(".input-variant-name:first").val(), 
			model:$(".input-variant-model:first").val(),
			stock:$(".input-variant-stock:first").val(), 
			ecommerce:$(".input-variant-ecommerce:first").val(),
			type:"stockable", 
			variants : variants
		},
		function(response){
			if(response.data.result="ok"){
				alert("Succesfully created.");
			}else{
				alert("Failed to create it.");
			}
		}
		);*/
	}
}
	/*serverApi.products.get(
		function(response){
			$scope.message = JSON.stringify(response.data);
		}
		);*/