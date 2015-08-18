'use strict';

angular.module('nachosBurritoTaco')
  .service('materialColor', function ($mdColorPalette) {
    var self = this;

    self.theme = 'indigo';
    self.registerd = [];

    var _getColor = function (base, shade) {
      var color = $mdColorPalette[base][shade].value;
      return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
    };

    self.get = function (shade, cb) {
      cb(_getColor(self.theme, shade));
      self.registerd.push({callback: cb, shade: shade});
    };

    self.set = function (theme) {
      self.theme = theme;

      self.registerd.forEach(function (item) {
        item.callback(_getColor(self.theme, item.shade));
      })
    }
  });