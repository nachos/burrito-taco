'use strict';

angular.module('nachosBurritoTaco')
  .controller('MainController', function ($scope, $timeout, burrito, materialColor) {
    var path = require('path');
    var relative = require('require-relative');
    var remote = require('remote');
    var _ = require('lodash');

    var argv = _.slice(remote.process.argv, 3);

    burrito.get()
      .then(function (item) {
        if (!!item.config.burrito && item.config.burrito.theme) {
          materialColor.set(item.config.burrito.theme);
        }

        $timeout(function () {
          item.content = {
            require: function (pkg) {
              return relative(pkg, item.path);
            },
            process: {
              argv: argv
            },
            changeColor: function (color) {
              return materialColor.set(color);
            }
          };

          item.settingsPath = path.join(item.path, item.config.main);

          $scope.item = item;
        });
      });
  });