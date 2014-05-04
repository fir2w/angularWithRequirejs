ngDefine('first.views.about', ['angular', 'module:first.service:./searchService.js'], function (module, angular) {
  'use strict';
  console.log('about init');
  var aboutController = [
    '$scope',
    'helloService',
    function ($scope, helloService) {
      helloService.sayHello();
    }];
  var app = angular.module('first');
  app.register.controller('aboutController', aboutController);

});
