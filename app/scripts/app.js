(function (window) {
  'use strict';
  var allService = ['module:first.routeResolverServices:./services/routeResolver','module:first.helloService:./services/helloService'];
  var allCtrl = ['module:first.views:./controllers/views'];

  var dependencies = [ 'jquery', 'angular', 'module:ng', 'module:ngResource:angular-resource', 'module:ngRoute:angular-route'].concat(allService, allCtrl);
  ngDefine('first', dependencies, function (module, angular) {
    'use strict';

    var RouteConfig = ['$routeProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$httpProvider', function ($routeProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $httpProvider) {

      var route = routeResolverProvider.route;

      module.register =
      {
        controller: $controllerProvider.register,
        directive: $compileProvider.directive,
        filter: $filterProvider.register,
        factory: $provide.factory,
        service: $provide.service
      };

      $routeProvider .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController'
      })
        .when('/about', route.resolve('about'))//aboutController
        .otherwise({ redirectTo: '/' });

     /* $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });*/
    }];

    module.config(RouteConfig);

  });

})(window || this);