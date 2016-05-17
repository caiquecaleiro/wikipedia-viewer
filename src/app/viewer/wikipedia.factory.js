(function() {
  'use strict';

  angular
    .module('app.viewer')
    .factory('wikipediaFactory', wikipediaFactory);

  wikipediaFactory.$inject = ['$http', '$q', 'wikipediaUrl'];

  function wikipediaFactory($http, $q, wikipediaUrl) {
    var service = {
      getPages: getPages
    };

    return service;

    /**
     * Returns the Wikipedia pages based on the description.
     * @param {string} description - The description written by the user.
     * @returns {promise}
     */
    function getPages(description) {
      var deferred = $q.defer();
      getData(description).then(
        function success(result) {
          var pagesData = result.data.query.pages;
          var pages = buildPages(pagesData);
          deferred.resolve(pages);
        },
        function error(error) {
          deferred.reject(error);
        }
      );
      return deferred.promise;
    }

    /**
     * Returns the Wikipedia Data based on the description.
     * @param {string} description - The description written by the user.
     * @returns {object} - The Wikipedia pages data.
     */
    function getData(description) {
      var api = 'https://en.wikipedia.org/w/api.php?format=json&action=query'
        + '&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts'
        + '&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=';
      var callback = '&callback=JSON_CALLBACK';
      var url = api + description + callback;

      return $http.jsonp(url);
    }

    /**
     * Creates the Wikipedia pages.
     * @param {object} pagesData - The Wikipedia pages data.
     * @returns {object} pages - The Wikipedia pages.
     */
    function buildPages(pagesData) {
      var pages = [];
      angular.forEach(pagesData, function(value, key) {
        pages.push(new Page(
          value.title,
          value.extract,
          wikipediaUrl.WIKI_PAGE + value.pageid
        ));
      });
      return pages;
    }

    /**
     * Represents a Wikipedia Page.
     * @constructor
     * @param {string} title - The title of the page.
     * @param {string} extract - A limited text about the page.
     * @param {string} pageUrl - The page URL.
     */
    function Page(title, extract, pageUrl) {
      this.title = title;
      this.extract = extract;
      this.pageUrl = pageUrl;
    }
  }
})();
