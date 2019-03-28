define([
  'backbone',
  'fastclick',
  'jquery',
  'layer'
], function (Backbone, Fastclick, $, layer) {
  'use strict';
  Fastclick.attach(document.body);
  var Router = Backbone.Router.extends({
    routes: {

    },
    initialize: function () {

    },
    home: function () {
      require(['apps/home/app'], function (app) {
        app.main();
      })
    }
  })
});