define([
  'doT',
  'text!components/modules/slide/tpl.html',
  'swiper',
  'lazyload'
], function (doT, tpl) {
  'use strict';
  return Backbone.View.extend({
    template: doT.template(tpl),
    events: {},
    initialize: function () { },
    render: function () {
      this.$el.html(this.template(this.model));
      this.$el.find(".swiper-container").swiper({
        loop: true,
        pagination: $(".swiper-pagination", this.$el)[0],
        autoplay: 2500,
        speed: 300,
        autoplayDisableOnInteraction: false,
        paginationClickable: true,
        lazyLoading: true
      });

      this.$('img.lazy').lazyload({ placeholder: 'images/grey.gif' });

      return this;
    },
  })
});