
export let Config = class Config {
  constructor() {
    this._config = { insert: true, position: 'top-right', timeout: 5000, type: 'info' };
  }

  all() {
    return this._config;
  }

  get(key) {
    return this._config[key];
  }

  options(obj) {
    Object.assign(this._config, obj);
  }

  set(key, value) {
    this._config[key] = value;
    return this._config[key];
  }
};