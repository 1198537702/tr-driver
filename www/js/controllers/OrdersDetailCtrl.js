/**
 * Created by 黄炳乾 on 2017/2/25.
 */
define(['app'], function (app) {
  'use strict';

  function ctrl($scope, $rootScope, $state, $http, Tool, $stateParams) {

    $scope.$on("$ionicView.beforeEnter", function () {
    $scope.order = Tool.getOrderById($stateParams.orderId);
      var driving = new AMap.Driving({
        map: map
      });
      driving.search([
        {keyword: $scope.order.start.p, city: '杭州'},
        {keyword: $scope.order.end.p, city: '杭州'}
      ]);

    });

    $scope.sub = function () {
      $scope.order.recevingTime = (new Date()).toLocaleString();
      $scope.order.driverId = $rootScope.user.tell;
      Tool.setOrder($scope.order);

      var data = {
        'driverId': $scope.order.driverId,
        'recevingTime': $scope.order.recevingTime,
        'id': $scope.order.id
      };
      $http.post(
        Tool.getOrderReceveURl(),
        data,
        Tool.getPostCfg()
      ).success(function (data) {
          $ionicPopup.alert({
            title: '接单成功'
          });
      }).error(function (data, status, headers, config) {

      });

      $state.go('tabs.orderInProgress');

    }
  }

  ctrl.$inject = ['$scope', '$rootScope', '$state', '$http', 'Tool', '$stateParams'];
  app.registerController('OrdersDetailCtrl', ctrl);
  // return ctrl;

});

