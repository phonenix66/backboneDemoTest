define([
  'apps/home/views/main'
], function (view1) {
  'use strict';
  var urlApi = "api/home";
  return {
    main: function () {
      this.mainView = new view1(urlApi);
    }
  }
});