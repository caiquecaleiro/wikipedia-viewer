(function() {
  'use strict';

  angular
    .module('app.viewer')
    .config(configFunction);

  configFunction.$inject = ['$routeProvider'];

  function configFunction($routeProvider) {

    $routeProvider
      .when('/viewer', {
        templateUrl: 'app/viewer/viewer.html',
        controller: 'ViewerController',
        controllerAs: 'vm'
      });
  }
})();
