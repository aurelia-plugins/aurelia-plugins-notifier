
export let Config = class Config {
  constructor() {
    this._config = { insert: true, position: 'top-right', timeout: 5000, type: 'info' };
  }

  all() {
    return this._config;
  }

  options(obj) {
    Object.assign(this._config, obj);
  }
};