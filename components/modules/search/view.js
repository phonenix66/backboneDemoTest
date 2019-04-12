define([
  'doT',
  'text!components/modules/search/tpl.html'
], function (doT, tpl) {
  'use strict';
  return Backbone.View.extend({
    template: doT.template(tpl),
    event: {
      "click .js-keyword": "search",
      "keypress #search-keyword": "search"
    },
    initialize: function () { },
    render: function () {
      this.$el.html(this.template(this.model));
      return this;
    },
    search: function (event) {
      if (event.keyCode == 13 || $(event.currentTarget).hasClass('js-keyword')) {
        var keyword = $('#search-keyword').val();
        if (keyword === '') {
          window.location.href = "#list";
          return !1;
        }
        window.location.href = "#list?&keyword=" + keyword;
      }
    }
  })
});