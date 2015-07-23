(function() {
  'use strict';

  angular
    .module('potato')
    .factory('photoDetail', photoDetail);

  function photoDetail() {

    var photo = {};

    function savePhoto (data) {
      photo = data;
    }

    function getPhoto () {
      return photo;
    }

    return {
      savePhoto: savePhoto,
      getPhoto: getPhoto
    };

  }
})();

