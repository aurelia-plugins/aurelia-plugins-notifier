define(['exports', './aurelia-plugins-notifier-config', './aurelia-plugins-notifier-service'], function (exports, _aureliaPluginsNotifierConfig, _aureliaPluginsNotifierService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.NotifierService = undefined;
  exports.configure = configure;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(_aureliaPluginsNotifierConfig.Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  }

  exports.NotifierService = _aureliaPluginsNotifierService.NotifierService;
});