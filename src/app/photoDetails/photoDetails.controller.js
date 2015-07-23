(function() {
  'use strict';

  angular
    .module('potato')
    .controller('PhotoDetailsController', PhotoDetailsController);

  function PhotoDetailsController($scope, photoDetail, moment) {

    $scope.photo = photoDetail.getPhoto();
    $scope.photo.allTags = getTags();
    $scope.photo.lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


    $scope.getAuthorUrl = function () {
      var url = $scope.photo.link.split('/');
      return url.slice(0, -2).join('/');
    };

    $scope.getPublishedDate = function () {
      var publishedDate = $scope.photo.published;
      return moment(publishedDate).format('Do MMM YYYY') + ' at ' + moment(publishedDate).format('HH:mm');
    };

    $scope.selectPhoto = function (photo) {
      photoDetail.savePhoto(photo);
    };

    function getTags () {
      if ($scope.photo.tags && $scope.photo.tags.length > 0) {
        return $scope.photo.tags.split(" ");
      }
    }
  }
})();
