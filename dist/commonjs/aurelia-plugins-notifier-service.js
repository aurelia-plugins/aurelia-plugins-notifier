'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotifierService = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _dec, _class;

var _aureliaAnimatorCss = require('aurelia-animator-css');

var _aureliaDependencyInjection = require('aurelia-dependency-injection');

var _aureliaPluginsNotifierConfig = require('./aurelia-plugins-notifier-config');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NotifierService = exports.NotifierService = (_dec = (0, _aureliaDependencyInjection.inject)(_aureliaPluginsNotifierConfig.Config, _aureliaAnimatorCss.CssAnimator), _dec(_class = function () {
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
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return this._cssAnimator.leave(notification);

            case 3:
              this._container.removeChild(notification);
              this._notifications.splice(this._notifications.indexOf(notification), 1);
              if (!this._notifications.length) this._removeContainer();
              _context.next = 10;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context['catch'](0);

            case 10:
            case 'end':
              return _context.stop();
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
}()) || _class);