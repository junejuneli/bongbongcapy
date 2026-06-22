
;(function () {
  var marker = '__BONGBONGCAPY_TRANSPARENT_CANVAS_PATCH__';
  var blendMarker = marker + '_blend';
  if (window[marker]) return;
  window[marker] = true;

  function patchTransparentBlend(gl) {
    if (!gl || gl[blendMarker]) return gl;
    gl[blendMarker] = true;

    var srcAlpha = gl.SRC_ALPHA;
    var oneMinusSrcAlpha = gl.ONE_MINUS_SRC_ALPHA;
    var one = gl.ONE;
    var originalBlendFuncSeparate = gl.blendFuncSeparate;
    var originalBlendFunc = gl.blendFunc;

    gl.blendFuncSeparate = function (srcRGB, dstRGB, srcAlphaFactor, dstAlphaFactor) {
      if (
        srcRGB === srcAlpha &&
        dstRGB === oneMinusSrcAlpha &&
        srcAlphaFactor === srcAlpha &&
        dstAlphaFactor === oneMinusSrcAlpha
      ) {
        return originalBlendFuncSeparate.call(this, srcRGB, dstRGB, one, dstAlphaFactor);
      }

      return originalBlendFuncSeparate.call(this, srcRGB, dstRGB, srcAlphaFactor, dstAlphaFactor);
    };

    if (originalBlendFunc) {
      gl.blendFunc = function (srcFactor, dstFactor) {
        if (srcFactor === srcAlpha && dstFactor === oneMinusSrcAlpha) {
          return originalBlendFuncSeparate.call(this, srcFactor, dstFactor, one, dstFactor);
        }

        return originalBlendFunc.call(this, srcFactor, dstFactor);
      };
    }

    return gl;
  }

  var originalGetContext = HTMLCanvasElement.prototype.getContext;
  HTMLCanvasElement.prototype.getContext = function (type, attrs) {
    if (this && this.id === 'GameCanvas' && typeof type === 'string' && type.toLowerCase().indexOf('webgl') !== -1) {
      attrs = Object.assign({}, attrs || {}, {
        alpha: true,
        premultipliedAlpha: false
      });
    }
    var context = originalGetContext.call(this, type, attrs);
    if (this && this.id === 'GameCanvas' && typeof type === 'string' && type.toLowerCase().indexOf('webgl') !== -1) {
      patchTransparentBlend(context);
    }
    return context;
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