/**
 * Created by 黄炳乾 on 2017/2/25.
 */
define(['app'], function (app) {
  'use strict';

  function ctrl($scope, $http, Tool, $stateParams, $ionicPopup) {
    $scope.$on("$ionicView.beforeEnter", function () {
    $scope.order = Tool.getOrderInProgress();

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
      Tool.setOrder($scope.order);
      $state.go('tabs.orderInProgress');

    }

  }

  ctrl.$inject = ['$scope', '$http', 'Tool', '$stateParams', '$ionicPopup'];
  app.registerController('OrderInProgressCtrl', ctrl);
  // return ctrl;

});
