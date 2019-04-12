define([
  'backbone',
  'doT',
  'router'
], function (Backbone, doT, Router) {
  'use strict';
  var init = function () {
    var router = new Router();
    Backbone.history.start();
  }
  return {
    initialize: init
  }
});