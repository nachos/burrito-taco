'use strict';

angular.module('nachosBurritoTaco')
  .controller('ShellController', function ($scope, $timeout, burrito, materialColor) {
    var remote = require('remote');
    var window = remote.getCurrentWindow();

    $scope.isFullScreen = false;

    $scope.close = function () {
      window.close();
    };

    $scope.toggleFullscreen = function () {
      if (!$scope.isFullScreen) {
        window.maximize();
      }
      else {
        window.unmaximize();
      }

      $scope.isFullScreen = !$scope.isFullScreen;
    };

    $scope.hide = function () {
      window.minimize();
    };

    burrito.get()
      .then(function (item) {
        $scope.title = item.config.name;
      });

    materialColor.get(700, function (color) {
      $timeout(function () {
        $scope.bg = color;
      });
    });
  });