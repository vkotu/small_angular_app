/**
 * Created by kotu on 10/11/15.
 */
(function(){
	var app = angular.module('store-products',[]);
	app.directive('productDescription', function(){
		return {
			restrict:'E',//for element
			templateUrl : 'product-description.html'
		};
	});

	app.directive('productReview', function(){
		return {
			restrict:'A',//for attribute
			templateUrl : 'product-review.html'
		};
	});

	app.directive('productPanel', function(){
		return {
			restrict:'E',//for element
			templateUrl : 'product-panel.html',
			controller: function(){
				this.tab = 1;
				this.selectTab = function(setTab)  {
					//alert(setTab);
					this.tab = setTab;
				};
				this.isSelected = function(checkTab)  {
					return this.tab === checkTab;
				};
			},
			controllerAs : "panel"
		};
	});
})();
