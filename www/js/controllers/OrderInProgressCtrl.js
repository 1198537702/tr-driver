define(['app'], function (app) {
  'use strict';

  function ctrl($scope, $http, Tool, $state) {
    $scope.$on("$ionicView.beforeEnter", function () {
      $scope.order = Tool.getOrderInProgress();


    });

    $scope.sub = function () {
      $scope.order.serviceTime = (new Date()).toLocaleString();
      var data = {
        'serviceTime': $scope.order.serviceTime,
        'id': $scope.order.id
      };
      $http.post(
        Tool.getOrderServiceURl(),
        data,
        Tool.getPostCfg()
      ).success(function (data) {

      }).error(function (data, status, headers, config) {

      });

      Tool.setOrder($scope.order);
      $state.go('tabs.orders');

    };
    $scope.daohang = function () {

    };

  }

  ctrl.$inject = ['$scope', '$http', 'Tool', '$state'];
  app.registerController('OrderInProgressCtrl', ctrl);
  // return ctrl;

});
