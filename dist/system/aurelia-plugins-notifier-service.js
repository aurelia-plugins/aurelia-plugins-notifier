'use strict';

System.register(['aurelia-animator-css', 'aurelia-framework', './aurelia-plugins-notifier-config'], function (_export, _context) {
  "use strict";

  var CssAnimator, inject, Config, _typeof, _dec, _class, NotifierService;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaAnimatorCss) {
      CssAnimator = _aureliaAnimatorCss.CssAnimator;
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaPluginsNotifierConfig) {
      Config = _aureliaPluginsNotifierConfig.Config;
    }],
    execute: function () {
      _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
        return typeof obj;
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };

      _export('NotifierService', NotifierService = (_dec = inject(Config, CssAnimator), _dec(_class = function () {
        function NotifierService(config, cssAnimator) {
          _classCallCheck(this, NotifierService);

          this._container = null;
          this._notifications = [];

          this._config = config;
          this._cssAnimator = cssAnimator;
        }

        NotifierService.prototype.clear = function clear() {
          var _this = this;

          this._notifications.forEach(function (notification) {
            return _this._removeNotification(notification);
          });
        };

        NotifierService.prototype.danger = function danger(title, message) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var event = arguments[3];

          if (typeof options === 'function') {
            event = options;options = {};
          }
          this.notify(title, message, Object.assign(options, { type: 'danger' }), event);
        };

        NotifierService.prototype.info = function info(title, message) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var event = arguments[3];

          if (typeof options === 'function') {
            event = options;options = {};
          }
          this.notify(title, message, Object.assign(options, { type: 'info' }), event);
        };

        NotifierService.prototype.muted = function muted(title, message) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var event = arguments[3];

          if (typeof options === 'function') {
            event = options;options = {};
          }
          this.notify(title, message, Object.assign(options, { type: 'muted' }), event);
        };

        NotifierService.prototype.notify = function notify(title, message, options, event) {
          if ((typeof message === 'undefined' ? 'undefined' : _typeof(message)) === 'object') {
            options = message;message = null;
          }
          if (typeof message === 'function') {
            event = message;message = null;
          }
          if (typeof options === 'function') {
            event = options;options = null;
          }
          options = Object.assign(this._config.all(), options);
          var notification = this._createNotification(title, message, options.type, event);
          this._createContainer(options.position);
          this._showNotification(notification, options);
        };

        NotifierService.prototype.primary = function primary(title, message) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var event = arguments[3];

          if (typeof options === 'function') {
            event = options;options = {};
          }
          this.notify(title, message, Object.assign(options, { type: 'primary' }), event);
        };

        NotifierService.prototype.remove = function remove() {
          this._removeNotification(this._notifications.shift());
        };

        NotifierService.prototype.secondary = function secondary(title, message) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var event = arguments[3];

          if (typeof options === 'function') {
            event = options;options = {};
          }
          this.notify(title, message, Object.assign(options, { type: 'secondary' }), event);
        };

        NotifierService.prototype.success = function success(title, message) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var event = arguments[3];

          if (typeof options === 'function') {
            event = options;options = {};
          }
          this.notify(title, message, Object.assign(options, { type: 'success' }), event);
        };

        NotifierService.prototype.warn = function warn(title, message) {
          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var event = arguments[3];

          if (typeof options === 'function') {
            event = options;options = {};
          }
          this.notify(title, message, Object.assign(options, { type: 'warn' }), event);
        };

        NotifierService.prototype._createContainer = function _createContainer(position) {
          if (this._container) return;
          this._container = document.createElement('ul');
          this._container.className = 'notifier-' + position;
          document.body.appendChild(this._container);
        };

        NotifierService.prototype._createElement = function _createElement(text, className, notification) {
          var element = document.createElement('p');
          element.className = className;
          element.textContent = text;
          notification.appendChild(element);
        };

        NotifierService.prototype._createNotification = function _createNotification(title, message, type, event) {
          var _this2 = this;

          var notification = document.createElement('li');
          notification.className = 'notifier-' + type;
          if (title) this._createElement(title, 'title', notification);
          if (message) this._createElement(message, 'message', notification);
          notification.addEventListener('click', function () {
            if (event) event();_this2._removeNotification(notification);
          });
          return notification;
        };

        NotifierService.prototype._removeContainer = function _removeContainer() {
          document.body.removeChild(this._container);
          this._container = null;
        };

        NotifierService.prototype._removeNotification = function () {
          var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(notification) {
            return regeneratorRuntime.wrap(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return this._cssAnimator.leave(notification);

                  case 3:
                    this._container.removeChild(notification);
                    this._notifications.splice(this._notifications.indexOf(notification), 1);
                    if (!this._notifications.length) this._removeContainer();
                    _context2.next = 10;
                    break;

                  case 8:
                    _context2.prev = 8;
                    _context2.t0 = _context2['catch'](0);

                  case 10:
                  case 'end':
                    return _context2.stop();
                }
              }
            }, _callee, this, [[0, 8]]);
          }));

          function _removeNotification(_x8) {
            return _ref.apply(this, arguments);
          }

          return _removeNotification;
        }();

        NotifierService.prototype._showNotification = function _showNotification(notification, options) {
          var _this3 = this;

          if (options.insert) {
            this._container.insertBefore(notification, this._notifications[0]);
            this._notifications.unshift(notification);
          } else {
            this._container.appendChild(notification);
            this._notifications.push(notification);
          }
          this._cssAnimator.enter(notification);
          setTimeout(function () {
            return _this3._removeNotification(notification);
          }, options.timeout);
        };

        return NotifierService;
      }()) || _class));

      _export('NotifierService', NotifierService);
    }
  };
});