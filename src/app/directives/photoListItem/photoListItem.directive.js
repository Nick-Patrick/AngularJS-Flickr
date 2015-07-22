(function() {
  'use strict';

  angular
    .module('potato')
    .directive('photoListItem', photoListItem);

  function photoListItem () {

    var directive = {
      restrict: 'E',
      templateUrl: '/app/directives/photoListItem/photoListItem.html',
      controller: PhotoListItemController,
      controllerAs: '$scope'
    };

    return directive;

    function PhotoListItemController ($scope, moment) {

      function getAuthorUrl () {
        var url = $scope.photo.link.split('/');
        return url.slice(0, -2).join('/');
      }

      function getPublishedDate () {
        var publishedDate = $scope.photo.published;
        return moment(publishedDate).format('Do MMM YYYY') + ' at ' + moment(publishedDate).format('HH:mm');
      }

      return {
        getAuthorUrl: getAuthorUrl,
        getPublishedDate: getPublishedDate
      };

    }

  }
})();

