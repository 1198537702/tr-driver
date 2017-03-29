/**
 * Created by 黄炳乾 on 2017/2/25.
 */
define(['app'], function (app) {
  'use strict';

  function ctrl($scope, $rootScope, $state, $cordovaImagePicker) {

    $scope.driver = {};
    //image picker
    $scope.pickImage = function () {
      var options = {
        maximumImagesCount: 1,
        width: 800,
        height: 800,
        quality: 80
      };

      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          $scope.images_list.push(results[0]);
          upImage(results[0]);
        }, function (error) {
          // error getting photos
        });
    };


    var upImage = function (imageUrl) {
      document.addEventListener('deviceready', function () {
        var url = "http://192.168.1.248/api/UserInfo/PostUserHead";
        var options = {};
        $cordovaFileTransfer.upload(url, imageUrl, options)
          .then(function (result) {
            alert(JSON.stringify(result.response));
            alert("success");
            alert(result.message);
          }, function (err) {
            alert(JSON.stringify(err));
            alert(err.message);
            alert("fail");
          }, function (progress) {
            // constant progress updates
          });

      }, false);
    }

  }

  ctrl.$inject = ['$scope', '$rootScope', '$state', '$cordovaImagePicker'];
  app.registerController('AuthenticationCtrl', ctrl);
  // return ctrl;

});
