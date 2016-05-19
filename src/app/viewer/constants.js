(function() {
  'use strict';

  angular
    .module('app.viewer')
    .constant('wikipediaUrl', {
      WIKI_PAGE: 'https://en.wikipedia.org/?curid='
    })
    .constant('errors', {
      NO_RESULT: 'Unfortunately, no results were found.'
    });
})();
