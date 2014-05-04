/* global ngDefine: false */
ngDefine('first.search', function (module) {
  'use strict';

  var SearchFactory = [ '$location', '$rootScope', function ($location, $rootScope) {


    var search = function () {
      var args = Array.prototype.slice(arguments);

      return $location.search.apply($location, arguments);
    };

    return search;
  }];

  module.factory('search', SearchFactory);
});
