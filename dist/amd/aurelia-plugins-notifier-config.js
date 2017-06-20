define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Config = exports.Config = function () {
    function Config() {
      _classCallCheck(this, Config);

      this._config = { insert: true, position: 'top-right', timeout: 5000, type: 'info' };
    }

    Config.prototype.all = function all() {
      return this._config;
    };

    Config.prototype.options = function options(obj) {
      Object.assign(this._config, obj);
    };

    return Config;
  }();
});