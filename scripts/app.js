'use strict';

/**
 * @ngdoc overview
 * @name angularJsBandsApp
 * @description
 * # angularJsBandsApp
 *
 * Main module of the application.
 */
angular
  .module('angularJsBandsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
      })
      .when('/foo', {
        templateUrl: 'views/construction.html',
      })
      .when('/bar', {
        templateUrl: 'views/construction.html',
      })
      .when('/the-rolling-stones', {
        templateUrl: 'views/rollingstones.html',
        controller: 'RollingStonesCtrl',
      })
      .when('/the-beatles', {
        templateUrl: 'views/beatles.html',
        controller: 'BeatlesCtrl',
      })
      .when('/queen', {
        templateUrl: 'views/queen.html',
        controller: 'QueenCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
