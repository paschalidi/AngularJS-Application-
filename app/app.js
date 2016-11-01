'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngMaterial', 'ngAnimate', 'toastr'])
       .config(function($mdThemingProvider) {
           $mdThemingProvider.theme('default')
                             .primaryPalette('teal')
                             .accentPalette('orange');
       });
