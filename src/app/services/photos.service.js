(function() {
  'use strict';

  angular
    .module('potato')
    .factory('photos', photos);

  function photos($http, $q) {
    var flickrUrl = 'https://api.flickr.com/services/feeds/photos_public.gne';

    function getAllPhotos () {
      var deferred = $q.defer();

      $http.jsonp(flickrUrl + '?tags=potato&tagmode=all&format=json&jsoncallback=JSON_CALLBACK')
        .success(function (data, status) {
          if (status === 200) {
            deferred.resolve(data);
          }
        })
        .error(function (data, status) {
          console.log(status, data);
          deferred.reject(status, data);
        });

      return deferred.promise;
    }

    return {
      getAllPhotos: getAllPhotos
    };

  }
})();

