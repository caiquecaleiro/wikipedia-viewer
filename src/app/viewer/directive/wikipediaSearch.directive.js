(function() {
  'use strict';

  angular
    .module('app.viewer')
    .directive('wikipediaSearch', wikipediaSearch);

    function wikipediaSearch() {
      return {
        templateUrl: 'app/viewer/directive/wikipediaSearch.html',
        restrict: 'E',
        controller: SearchController,
        controllerAs: 'vm',
        bindToController: true,
        scope: {
          pages: '='
        }
      }
    }

    SearchController.$inject = ['wikipediaFactory', 'errors'];

    function SearchController(wikipediaFactory, errors) {
      var vm = this;
      vm.search = search;
      vm.description = '';
      vm.error = null;

      /**
       * Search for the Wikipedia pages based on the description.
       * If there's no results, it will show an error message for the user.
       * @param {string} description - The description written by the user.
       */
      function search(description) {
        if (description) {
          wikipediaFactory.getPages(description).then(function(data) {
            if (data) {
              vm.pages = data;
              vm.error = null;
            } else {
              vm.pages = null;
              vm.error = errors.NO_RESULT;
            }
          });
        } else {
          vm.pages = null;
          vm.error = null;
        }
      }
    }
})();
