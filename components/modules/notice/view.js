define([
  'doT',
  'text!components/modules/notice/tpl.html'
], function (doT, tpl) {
  'use strict';
  return Backbone.View.extend({
    template: doT.template(tpl),
    events: {},
    render: function () {
      this.$el.html(this.template(this.model));
      return this;
    }
  })
});