/* global ngDefine: false */
ngDefine('first.service', ['angular'], function (module,angular) {
  'use strict';
  console.log('searchService init');
  var Service = function () {
    return {
      sayHello: function () {
        console.log('hello');
      }
    };
  };

  var app = angular.module('first');
  app.register.factory('helloService', Service);
  //module.factory('helloService', Service);
});
