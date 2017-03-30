/**
 * Created by 黄炳乾 on 2017/2/25.
 */
define(['app'], function (app) {
  'use strict';

  function ctrl($scope, $rootScope, $http, $ionicPopup, Tool, $state) {
    $scope.correntTabs = '';
    $scope.orderList = new Array();
    $scope.msg = '';
    $scope.$on("$ionicView.beforeEnter", function () {

      $http({
        method: 'GET', url: Tool.getOrderFinishedListURL(),

        params: {
          'driverId': $rootScope.user.tell
        }

      }).success(function (data) {
        $scope.orderList = Tool.setOrderFinishedList(data.orderList);

      });
      if($scope.orderList.length==0){
          $scope.msg = '您还没有接过任何订单'
      }else{
          $scope.msg = ''
      }
    });


  }

  ctrl.$inject = ['$scope', '$rootScope', '$http', '$ionicPopup', 'Tool', '$state'];
  app.registerController('OrderCtrl', ctrl);
  // return ctrl;

});
