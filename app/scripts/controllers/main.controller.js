/* global define: false */
ngDefine('first.views.main',['angular'], function (module) {
  'use strict';

  //var module = angular.module('first.views');

  module
    .controller('mainController', function ($scope, $http) {
      $http.get('/api/awesomeThings').success(function (awesomeThings) {

        $scope.awesomeThings = awesomeThings;
      });

    });
});
