(function() {
  'use strict';

  angular
    .module('app.viewer')
    .controller('ViewerController', ViewerController);

    ViewerController.$inject = ['wikipediaFactory'];

    function ViewerController(wikipediaFactory) {
      var vm = this;
      vm.search = search;
      vm.description = '';
      vm.pages = [];

      /**
       * Search for the Wikipedia pages based on the description.
       * @param {string} description - The description written by the user.
       */
      function search(description) {
        wikipediaFactory.getPages(description).then(function(data) {
          vm.pages = data;
        });
      }
    }
})();
