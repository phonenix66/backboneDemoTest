requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery/jquery.min',
    underscore: 'lib/underscore/underscore-min',
    doT: 'lib/doT/doT',
    backbone: 'lib/backbone/backbone-min',
    fastclick: 'lib/fastclick/lib/fastclick',
    text: 'lib/requirejs-text/text',
    layer: 'plugin/layer/layer'
  },
  shim: {
    'backbone': {
      deps: ["underscore", "doT", "jquery"],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    jquery: {
      exports: '$'
    },
    doT: {
      exports: 'doT'
    }
  }
})