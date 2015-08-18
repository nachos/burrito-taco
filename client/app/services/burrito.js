'use strict';

angular.module('nachosBurritoTaco')
  .service('burrito', function () {
    var packages = require('nachos-packages');
    var remote = require('remote');

    var pkg = remote.process.argv[2];

    var self = this;

    self.get = function () {
      if(!self.package) {
        return packages.getBurrito(pkg)
          .then(function (item) {
            self.package = item;
            return item;
          })
      }

      return self.package;
    };
  });