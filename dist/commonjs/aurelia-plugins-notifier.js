'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotifierService = undefined;
exports.configure = configure;

var _aureliaPluginsNotifierConfig = require('./aurelia-plugins-notifier-config');

var _aureliaPluginsNotifierService = require('./aurelia-plugins-notifier-service');

function configure(aurelia, configCallback) {
  var instance = aurelia.container.get(_aureliaPluginsNotifierConfig.Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
}

exports.NotifierService = _aureliaPluginsNotifierService.NotifierService;