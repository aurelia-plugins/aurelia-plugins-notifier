'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var Config;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('Config', Config = function () {
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
      }());

      _export('Config', Config);
    }
  };
});