/**
 * Created by 黄炳乾 on 2017/2/25.
 */
define(['app'], function (app) {
  'use strict';

  function ctrl($scope, $rootScope, $http, $ionicPopup, Tool, $state) {

    $scope.orderList = null;


    $scope.$on("$ionicView.beforeEnter", function () {
      $http({
        method: 'GET', url: Tool.getOrderListURL()

      }).success(function (data) {
          $scope.orderList = Tool.setOrderList(data.orderList);
      });


    });
  }

  ctrl.$inject = ['$scope', '$rootScope', '$http', '$ionicPopup', 'Tool', '$state'];
  app.registerController('OrdersCtrl', ctrl);
  // return ctrl;

});
