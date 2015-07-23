(function() {
  'use strict';

  angular
    .module('potato')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/photoDetails', {
        templateUrl: 'app/photoDetails/photoDetails.html',
        controller: 'PhotoDetailsController',
        controllerAs:'photoDetails'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
