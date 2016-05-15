(function() {
  'use strict';

  angular
    .module('app.viewer')
    .factory('wikipediaFactory', wikipediaFactory);

  wikipediaFactory.$inject = ['$http'];

  function wikipediaFactory($http) {
    var service = {
      getData: getData
    };

    return service;

    function getData(description) {
      var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query'
        + '&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts'
        + '&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
      var callback = '&callback=JSON_CALLBACK';
      var url = api + description + callback;

      return $http.jsonp(url);
    }
  }
})();
