/**
 * Created by 黄炳乾 on 2017/2/25.
 */
define(['app'], function (app) {
  'use strict';

  function ctrl($scope, $rootScope, $state, $http, Tool, $ionicPopup) {
    //{time: null, start:"北京", end:"杭州", carType:"金杯", ad:null, remark:"blue"}
    var ad;
    $scope.contacts = {};
    $scope.$on("$ionicView.beforeEnter", function () {

      var driving = new AMap.Driving({
        map: map
      });
      driving.search([
        {keyword: $rootScope.newOrder.start.p, city: '杭州'},
        {keyword: $rootScope.newOrder.end.p, city: '杭州'}
      ]);

    });

    $scope.sub = function () {
      $state.go('tabs.orderInProgress');
    }
  }

  ctrl.$inject = ['$scope', '$rootScope', '$state', '$http', 'Tool', '$ionicPopup'];
  app.registerController('OrdersDetailCtrl', ctrl);
  // return ctrl;

});

