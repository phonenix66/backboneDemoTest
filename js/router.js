define([
  'backbone',
  'fastclick',
  'jquery',
  'layer',
  'self'
], function (Backbone, Fastclick, $, layer) {
  'use strict';
  Fastclick.attach(document.body);

  /** 
   * 下面定义一些方法，当然你也可以放入js/self自定义的插件里，放在这里主要是方便修改
  */
  $.pageInit = function () {

  }

  var Router = Backbone.Router.extends({
    routes: {
      '': 'home',
      'user(/:action)': 'user',
      'good/:id': 'goods',
      '*actions': 'defaultAction'
    },
    initialize: function () {
      /** 
       * 路由初始化可以做一些事  执行一次
      */
      $(".loading-modal").remove();
      this.backUrl = '';
      /**
       * 清除缓存的临时数据，本项目需要用到
       */
      if ($.localStorage) {
        localStorage.removeItem("area");
        localStorage.removeItem("footer");
      }
    },
    home: function () {
      require(['apps/home/app'], function (app) {
        app.main();
      })
    },
    user: function (action) {
      this.loading();
    },
    goods: function () {
      this.loading();
    },
    loading: function () {
      $.loading();
      $.pageInit();
      this.backUrl = window.location.hash;
    },
    defaultAction: function () {
      var self = this;
      layer.open({
        content: '页面开发中',
        time: 1.5,
        end: function () {
          Backbone.history.navigate(self.backUrl, {
            trigger: !0,
            replace: !0
          })
        }
      });
    }
  })
  return Router;
});