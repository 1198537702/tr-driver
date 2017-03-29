/**
 * Created by 黄炳乾 on 2016/10/31.
 */
define(['jquery'], function () {
  "use strict";
  var xiaoMianBaoQiBu = 33;
  var zhongMianBaoQiBu = 50;
  var xiaoHuoCheQiBu = 60;
  var zhongHuoCheQiBu = 100;

  var xiaoMianBaoChao = 3;
  var zhongMianBaoChao = 4;
  var xiaoHuoCheChao = 4;
  var zhongHuoCheChao = 5;
  var orderList;
  var orderInProgress;
  var factory = function () {
    var host = 'http://127.0.0.1:8000';
    return {
      all: function () {
        return chats;
      },
      getLoginUrl: function () {
        return host + '/app/login';
      },
      getOrderReceveURl: function () {
        return host + '/app/orderReceve';
      },
      getOrderListURL: function () {
        return host + '/app/driverOrderList';
      },
      getDriverInfoUrl: function () {
        return host + '/app/driverInfo';
      },
      getStaticFilesURL: function () {
        return host + '/staticFiles/';
      },
      getOrderEvaluationURL: function () {
        return host + '/app/orderEvaluation';
      },
      getPostCfg: function () {
        var postCfg = {
          headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          transformRequest: function (data) {
            return $.param(data);
          }
        };

        return postCfg;
      },

      setOrderList: function (list) {
        for (var i = 0; i < list.length; i++) {
          list[i].ad = '';
          if (list[i].anZhuan == 'true') {
            list[i].ad += '  安装 '
          }
          if (list[i].banYun == 'true') {
            list[i].ad += '  搬运 '
          }
          if (list[i].huiDan == 'true') {
            list[i].ad += '  回单 '
          }
          if (list[i].payment == 'true') {
            list[i].ad += '  回款:' + list[i].payment + '元'
          }
        }
        orderList = list;
        return list;
      },
      setOrder: function (order) {
        orderList = order;
      },
      getOrderById: function (id) {
        var o = {};
        for (var i = 0; i < orderList.length; i++) {
          if (orderList[i].id == id) {
            o = orderList[i];
            break;
          }
        }
        return o;
      },
      getOrderInProgress: function () {
        return orderInProgress;
      }


    };
  };
  factory().$inject = [];
  return factory;
});
