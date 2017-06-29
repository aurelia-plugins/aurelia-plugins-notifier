// IMPORTS
import {CssAnimator} from 'aurelia-animator-css';
import {inject} from 'aurelia-dependency-injection';

import {Config} from './aurelia-plugins-notifier-config';


// DEPENDENCY INJECTION
@inject(Config, CssAnimator)


// PUBLIC CLASS
export class NotifierService {
  // PRIVATE PROPERTIES (DI)
  _config;
  _cssAnimator;

  // PRIVATE PROPERTIES (CUSTOM)
  _container = null;
  _notifications = [];

  // CONSTRUCTOR
  constructor(config, cssAnimator) {
    this._config = config;
    this._cssAnimator = cssAnimator;
  }

  // PUBLIC METHODS
  clear() {
    this._notifications.forEach(notification => this._removeNotification(notification));
  }

  danger(title, message, options = {}, event) {
    if (typeof options === 'function') { event = options; options = {}; }
    this.notify(title, message, Object.assign(options, { type: 'danger' }), event);
  }

  info(title, message, options = {}, event) {
    if (typeof options === 'function') { event = options; options = {}; }
    this.notify(title, message, Object.assign(options, { type: 'info' }), event);
  }

  muted(title, message, options = {}, event) {
    if (typeof options === 'function') { event = options; options = {}; }
    this.notify(title, message, Object.assign(options, { type: 'muted' }), event);
  }

  notify(title, message, options, event) {
    if (typeof message === 'object') { options = message; message = null; }
    if (typeof message === 'function') { event = message; message = null; }
    if (typeof options === 'function') { event = options; options = null; }
    options = Object.assign(this._config.all(), options);
    const notification = this._createNotification(title, message, options.type, event);
    this._createContainer(options.position);
    this._showNotification(notification, options);
  }

  primary(title, message, options = {}, event) {
    if (typeof options === 'function') { event = options; options = {}; }
    this.notify(title, message, Object.assign(options, { type: 'primary' }), event);
  }

  remove() {
    this._removeNotification(this._notifications.shift());
  }

  secondary(title, message, options = {}, event) {
    if (typeof options === 'function') { event = options; options = {}; }
    this.notify(title, message, Object.assign(options, { type: 'secondary' }), event);
  }

  success(title, message, options = {}, event) {
    if (typeof options === 'function') { event = options; options = {}; }
    this.notify(title, message, Object.assign(options, { type: 'success' }), event);
  }

  warn(title, message, options = {}, event) {
    if (typeof options === 'function') { event = options; options = {}; }
    this.notify(title, message, Object.assign(options, { type: 'warn' }), event);
  }

  // PRIVATE METHODS
  _createContainer(position) {
    if (this._container) return;
    this._container = document.createElement('ul');
    this._container.className = `notifier-${position}`;
    document.body.appendChild(this._container);
  }

  _createElement(text, className, notification) {
    const element = document.createElement('p');
    element.className = className;
    element.textContent = text;
    notification.appendChild(element);
  }

  _createNotification(title, message, type, event) {
    const notification = document.createElement('li');
    notification.className = `notifier-${type}`;
    if (title) this._createElement(title, 'title', notification);
    if (message) this._createElement(message, 'message', notification);
    notification.addEventListener('click', () => { if (event) event(); this._removeNotification(notification); });
    return notification;
  }

  _removeContainer() {
    document.body.removeChild(this._container);
    this._container = null;
  }

  async _removeNotification(notification) {
    try {
      await this._cssAnimator.leave(notification);
      this._container.removeChild(notification);
      this._notifications.splice(this._notifications.indexOf(notification), 1);
      if (!this._notifications.length) this._removeContainer();
    }
    catch (err) {}
  }

  _showNotification(notification, options) {
    if (options.insert) {
      this._container.insertBefore(notification, this._notifications[0]);
      this._notifications.unshift(notification);
    } else {
      this._container.appendChild(notification);
      this._notifications.push(notification);
    }
    this._cssAnimator.enter(notification);
    setTimeout(() => this._removeNotification(notification), options.timeout);
  }
}