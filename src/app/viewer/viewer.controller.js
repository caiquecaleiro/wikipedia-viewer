(function() {
  'use strict';

  angular
    .module('app.viewer')
    .controller('ViewerController', ViewerController);

    ViewerController.$inject = ['wikipediaFactory'];

    function ViewerController(wikipediaFactory) {
      var vm = this;
      search('Java');

      function search(description) {
        wikipediaFactory.getData(description)
          .success(function(data) {
            console.log(data);
          });
      }
    }
})();
