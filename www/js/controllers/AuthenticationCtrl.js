/**
 * Created by 黄炳乾 on 2017/2/25.
 */
define(['app'], function (app) {
  'use strict';

  function ctrl($scope, $rootScope, $state, $cordovaImagePicker, $cordovaFileTransfer, Tool) {
    $scope.images = {};
    $scope.driver = {};
    function upImage(imageUrl, type) {

      document.addEventListener('deviceready', function () {
        var url = Tool.uploadDriverImgURL();
        var options = new FileUploadOptions();
        options.fileKey = "file";
        options.fileName = $rootScope.user.tell + '_' + type;
        var params = {};
        params.id = $rootScope.user.tell;
        params.type = $rootScope.user.type;
        options.params = params;

        $cordovaFileTransfer.upload(url, imageUrl, {}, true)
          .then(function (result) {
          }, function (err) {
          }, function (progress) {
            // constant progress updates
          });


      }, false);

    }

    $scope.pickImage = function (type) {
      var options = {
        maximumImagesCount: 1,
        width: 80,
        height: 80,
        quality: 100
      };

      $cordovaImagePicker.getPictures(options)
        .then(function (results) {
          $scope.images[type] = results[0];
          upImage(results[0], type);
        }, function (error) {
          // error getting photos
        });
    };


  }

  ctrl.$inject = ['$scope', '$rootScope', '$state', '$cordovaImagePicker', '$cordovaFileTransfer', 'Tool'];
  app.registerController('AuthenticationCtrl', ctrl);
  // return ctrl;

});
