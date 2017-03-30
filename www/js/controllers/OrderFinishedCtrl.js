/**
 * Created by 黄炳乾 on 2017/2/25.
 */
define(['app', 'jquery'], function (app) {
  'use strict';

  function ctrl($scope, $http, Tool, $stateParams, $ionicPopup) {
    var mark = 5;
    $scope.$on("$ionicView.beforeEnter", function () {

      $scope.order = Tool.getFinishedOrderById($stateParams.orderId);

      for(var i = 1; i <= parseInt($scope.order.mark); i++){
        $('#'+i).addClass('myactive');
      }

    });


  }

  ctrl.$inject = ['$scope', '$http', 'Tool', '$stateParams', '$ionicPopup'];
  app.registerController('OrderFinishedCtrl', ctrl);
  // return ctrl;

});
