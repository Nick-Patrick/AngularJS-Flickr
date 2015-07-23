(function() {
  'use strict';

  describe('PhotoDetails Controller', function() {
    beforeEach(module('potato'));

    var $controller;
    var $scope = {};
    var controller;

    beforeEach(inject(function (_$controller_) {
      $controller = _$controller_;
      controller = $controller('PhotoDetailsController', {$scope: $scope });

    }));

    describe('$scope.getAuthorUrl', function () {
      it('should strip out photo id from url', function () {
        $scope.photo.link = 'https://www.flickr.com/photos/author/photo/';
        expect($scope.getAuthorUrl()).toEqual('https://www.flickr.com/photos/author');
      });
    });

    describe('$scope.getPublishedDate', function () {
      it('should return date in correct format and timezone', function () {
        $scope.photo.published = '2015-07-23T14:07:18Z';
        expect($scope.getPublishedDate()).toEqual('23rd Jul 2015 at 15:07');
      });
    });

  });
})();
