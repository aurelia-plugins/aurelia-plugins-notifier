
import { Config } from './aurelia-plugins-notifier-config';
import { NotifierService } from './aurelia-plugins-notifier-service';

export function configure(aurelia, configCallback) {
  const instance = aurelia.container.get(Config);
  if (configCallback !== undefined && typeof configCallback === 'function') configCallback(instance);
}

export { NotifierService };