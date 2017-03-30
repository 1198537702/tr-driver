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
  var orderFinishedList;
  var factory = function () {
    var host = 'http://3s9cyw.natappfree.cc';
    return {
      all: function () {
        return chats;
      },
      getLoginUrl: function () {
        return host + '/app/driverLogin';
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
      getOrderServiceURl: function () {
        return host + '/app/orderService';
      },
      getOrderFinishedListURL: function () {
        return host + '/app/orderFinishedList';
      },
      uploadDriverImgURL: function () {
        return host + '/app/uploadDriverImg';
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

      setOrderFinishedList: function (list) {
        orderFinishedList = list;
        return list;
      },
      setOrder: function (order) {
        orderInProgress = order;
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

      getFinishedOrderById: function (id) {
        var o = {};
        for (var i = 0; i < orderFinishedList.length; i++) {
          if (orderFinishedList[i].id == id) {
            o = orderFinishedList[i];
            break;
          }
        }
        o.ad = '';
        if (o.anZhuan == 'true') {
          o.ad += '  安装 '
        }
        if (o.banYun == 'true') {
          o.ad += '  搬运 '
        }
        if (o.huiDan == 'true') {
          o.ad += '  回单 '
        }
        if (o.payment == 'true') {
          o.ad += '  回款:' + list[i].payment + '元'
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
