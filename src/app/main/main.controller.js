(function() {
  'use strict';

  angular
    .module('potato')
    .controller('MainController', MainController);

  function MainController($scope, photos) {
    $scope.photos = {};
    var allPhotos = [];

    photos.getAllPhotos().then(function (response) {
      allPhotos = response.items;
      $scope.photos = allPhotos.slice(0,6);
    });

    $scope.getMorePhotos = function () {
      var lastCount = $scope.photos.length;
      if (lastCount < (allPhotos.length - 4)) {
        for (var i = 1; i <= 4; i++) {
          $scope.photos.push(allPhotos[lastCount + i]);
        }
      }
    }

  }
})();
