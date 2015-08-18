'use strict';

angular.module('nachosBurritoTaco')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell.main', {
        url: '/',
        controller: 'MainController',
        templateUrl: 'app/main/main.html'
      });
  });
