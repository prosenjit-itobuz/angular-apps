/*
Main script
*/
'use strict';
var app = angular.module('app', ['ui.router'])
	.run([function(){
		console.log('app is running.')
	}]);

	app.config(function($stateProvider, $urlRouterProvider) {
	  //
	  // For any unmatched url, redirect to /state1
	  $urlRouterProvider.otherwise("/state1");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('state1', {
	      url: "/state1",
	      templateUrl: "views/state-1.html"
	    })
	    .state('state2', {
	      url: "/state2",
	      templateUrl: "views/state-2.html"
	    })
	});
