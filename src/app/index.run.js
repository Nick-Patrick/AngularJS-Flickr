(function() {
  'use strict';

  angular
    .module('potato')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
