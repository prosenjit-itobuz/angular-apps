/*
Main script
*/
'use strict';
var dependencies = ['ui.router', 'firebase"']
var app = angular.module('app', dependencies)
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
	      controllers: 'schoolCtrl',
	      templateUrl: "views/school/school.html"
	    })
	});
