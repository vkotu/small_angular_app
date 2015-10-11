/**
 * Created by kotu on 10/5/15.
 */

(function(){
	var app = angular.module('store',[]);
	app.controller('StoreController',function(){
		this.product = gems;
		this.test = {name:'test',description:'sample',canPurchase:true,soldOut:false};
	});
	var gems =[ {
		name: 'firstgem',
		description: 'Gem Description',
		price: 2,
		canPurchase: true,
		soldOut:false,
		reviews: [{
			stars: 5,
			body: "I love this gem!",
			author: "joe@example.org",
			createdOn: 1397490980837
		}, {
			stars: 1,
			body: "This gem sucks.",
			author: "tim@example.org",
			createdOn: 1397490980837
		}]
		}, {
		name: 'secondgem',
		description: 'Gem Description 2',
		canPurchase: true,
		price:4,
		soldOut:false,
		reviews: [{
			stars: 3,
			body: "I think this gem was just OK, could honestly use more shine, IMO.",
			author: "JimmyDean@example.org",
			createdOn: 1397490980837
		}, {
			stars: 4,
			body: "Any gem with 12 faces is for me!",
			author: "gemsRock@example.org",
			createdOn: 1397490980837
		}]
	},
	];
	

	
	app.controller('ReviewController',function(){
		this.review = {};
		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review={};
		}
	});
	
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

