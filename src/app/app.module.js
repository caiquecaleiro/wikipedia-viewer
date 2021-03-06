(function() {
  'use strict';

  angular
    .module('app', [
      'ngRoute',
      'app.viewer'
    ])
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/viewer'
      });
  }
})();
