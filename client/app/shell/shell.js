'use strict';

angular.module('nachosBurritoTaco')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shell', {
        abstract: true,
        controller: 'ShellController',
        templateUrl: 'app/shell/shell.html'
      });
  });
