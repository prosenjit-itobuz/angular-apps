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
	  $urlRouterProvider.otherwise("/home");
	  //
	  // Now set up the states
	  $stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "views/home.html"
	    })

	    // Student app
	    .state('school', {
	      url: "/school",
	      templateUrl: "views/school/school.html"
	    })
	});
