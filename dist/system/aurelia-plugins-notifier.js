'use strict';

System.register(['./aurelia-plugins-notifier-config', './aurelia-plugins-notifier-service'], function (_export, _context) {
  "use strict";

  var Config, NotifierService;
  function configure(aurelia, configCallback) {
    var instance = aurelia.container.get(Config);
    if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPluginsNotifierConfig) {
      Config = _aureliaPluginsNotifierConfig.Config;
    }, function (_aureliaPluginsNotifierService) {
      NotifierService = _aureliaPluginsNotifierService.NotifierService;
    }],
    execute: function () {
      _export('NotifierService', NotifierService);
    }
  };
});