
;(function () {
  var marker = '__BONGBONGCAPY_TRANSPARENT_CANVAS_PATCH__';
  if (window[marker]) return;
  window[marker] = true;

  var originalGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (type, attrs) {
    if (this && this.id === 'GameCanvas' && typeof type === 'string' && type.toLowerCase().indexOf('webgl') !== -1) {
      attrs = Object.assign({}, attrs || {}, {
        alpha: true,
        premultipliedAlpha: false
      });
    }
    return originalGetContext.call(this, type, attrs);
  };

  var canvas = document.getElementById('GameCanvas');
  if (canvas) canvas.style.backgroundColor = 'rgba(0, 0, 0, 0)';
}());
System.register(["./application.js"], function (_export, _context) {
  "use strict";

  var Application, canvas, $p, bcr, application;
  function topLevelImport(url) {
    return System["import"](url);
  }
  return {
    setters: [function (_applicationJs) {
      Application = _applicationJs.Application;
    }],
    execute: function () {
      canvas = document.getElementById('GameCanvas');
      $p = canvas.parentElement;
      bcr = $p.getBoundingClientRect();
      canvas.width = bcr.width;
      canvas.height = bcr.height;
      application = new Application();
      topLevelImport('cc').then(function (engine) {
        return application.init(engine);
      }).then(function () {
        return application.start();
      })["catch"](function (err) {
        console.error(err);
      });
    }
  };
});