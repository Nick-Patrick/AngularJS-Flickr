(function() {
  'use strict';

  angular
    .module('potato')
    .controller('MainController', MainController);

  function MainController($scope, photos) {

    $scope.photos = {};

    photos.getAllPhotos().then(function (response) {
      $scope.photos = response.items;
      console.log($scope.photos);
    });

  }
})();
