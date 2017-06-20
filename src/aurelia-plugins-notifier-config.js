// PUBLIC CLASS
export class Config {
  // PRIVATE PROPERTIES
  _config;

  // CONSTRUCTOR
  constructor() {
    this._config = { insert: true, position: 'top-right', timeout: 5000, type: 'info' };
  }

  // PUBLIC METHODS
  all() {
    return this._config;
  }

  options(obj) {
    Object.assign(this._config, obj);
  }
}