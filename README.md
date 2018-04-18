# aurelia-plugins-notifier

A notifier plugin for Aurelia.

## Installation

**Webpack/Aurelia CLI**

```shell
npm install aurelia-plugins-notifier --save
```

When using Aurelia CLI add the following dependency to `aurelia.json`:

```json
{
  "name": "aurelia-plugins-notifier",
  "path": "../node_modules/aurelia-plugins-notifier/dist/amd",
  "main": "aurelia-plugins-notifier"
}
```

Add `node_modules/babel-polyfill/dist/polyfill.min.js` to the prepend list in `aurelia.json`. Do not forgot to add `babel-polyfill` to the dependencies in `package.json`.

**JSPM**

```shell
jspm install aurelia-plugins-notifier
```

**Bower**

```shell
bower install aurelia-plugins-notifier
```

## Configuration

Inside of your `main.js` or `main.ts` file simply load the plugin inside of the configure method using `.plugin()`.

```javascript
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  aurelia.use
    .plugin('aurelia-plugins-notifier', config => {
      config.options({
        insert: true|false, // whether or not to insert new notifications as a stack or replace the latest one, default is true
        position: 'bottom-left'|'bottom-right'|'top-left'|'top-right', // the position on the page where to show the notifications, default is 'top-right'
        timeout: 5000, // the TTL of the notification, default is 5000
        type: 'danger'|'info'|'muted'|'primary'|'secondary'|'success'|'warn' // the default style of the notification, default is 'info'
      });
    });

  await aurelia.start();
  aurelia.setRoot('app');
}
```

## Usage

Once the notifier plugin is configured, add the `NotifierService` in your view model. The `NotifierService` has several public methods that can be called to show of hide the notification.
 
```javascript
import {inject} from 'aurelia-framework';
import {NotifierService} from 'aurelia-plugins-notifier';

@inject(NotifierService)

export class App {
  constructor(NotifierService) {
    this.notifierService = notifierService;
  }  

  buttonClick() {
    // SHOW NOTIFICATIONS
    this.notifierService.notify(title, message, options, event);  // shows a notification with default options

    // 'FIXED TYPE' METHODS
    this.notifierService.danger(title, message, options, event); // shows a notification of type 'danger'
    this.notifierService.info(title, message, options, event); // shows a notification of type 'info'
    this.notifierService.muted(title, message, options, event); // shows a notification of type 'muted'
    this.notifierService.primary(title, message, options, event); // shows a notification of type 'primary'
    this.notifierService.secondary(title, message, options, event); // shows a notification of type 'secondary'
    this.notifierService.success(title, message, options, event); // shows a notification of type 'success'
    this.notifierService.warn(title, message, options, event); // shows a notification of type 'warn'
    
    // HIDE NOTIFICATIONS
    this.notifierService.clear(); // removes all notifications
    this.notifierService.remove(); // removes the first (oldest) notification
  }
}
```

## Parameters

* `title` (required) - string - the title shown in the notification
* `message` (optional) - string - the message shown in the notification below the title
* `options` (optional) - object - override the default options once for this notification
  * `insert` - true|false - whether or not to insert new notifications as a stack or replace the latest one, default is true
  * `timeout` - 5000 - the TTL of the notification, default is 5000
  * `type` - 'danger'|'info'|'muted'|'primary'|'secondary'|'success'|'warn' - the default style of the notification, default is 'info'
* `event` (optional) - function - the event that is executed when the notification is clicked (see below)

## Click Event

By default, if you click the notification, it will be removed. It is also possible to bind a custom click event to the notification. After your custom event has executed, the notification is yet removed. 

```javascript
import {inject} from 'aurelia-framework';
import {NotifierService} from 'aurelia-plugins-notifier';

@inject(NotifierService)

export class App {
  constructor(NotifierService) {
    this.notifierService = notifierService;
  }  

  buttonClick() {
    this.notifierService.info('Long live Aurelia...', () => alert('...and long live Aurelia-Plugins!'));
  }
}
```

## Styling

The notifier doesn't come with styling. If you use the CSS Framework [`Faceman`](<http://faceman.io>), styling is provided automatically. Otherwise copy and paste the below styling to your SCSS stylesheet. Use the variables to change the look-and-feel.

```scss
// VARIABLES
$notifier-border-radius: 4px !default;
$notifier-icon-danger-color: #ffffff !default;
$notifier-icon-info-color: #ffffff !default;
$notifier-icon-muted-color: #ffffff !default;
$notifier-icon-primary-color: #ffffff !default;
$notifier-icon-secondary-color: #ffffff !default;
$notifier-icon-size: 36px !default;
$notifier-icon-success-color: #ffffff !default;
$notifier-icon-warn-color: #ffffff !default;
$notifier-margin-x: 16px !default;
$notifier-margin-y: 16px !default;
$notifier-message-color: #ffffff !default;
$notifier-padding-x: 16px !default;
$notifier-padding-y: 16px !default;
$notifier-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12) !default;
$notifier-shadow-hover: 0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19) !default;
$notifier-title-color: #ffffff !default;
$notifier-title-font-weight: 700 !default;
$notifier-width: 360px !default;

// ICONS
$notifier-icon-danger: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path d="M571 589q-10-25-34-35t-49 0q-108 44-191 127t-127 191q-10 25 0 49t35 34q13 5 24 5 42 0 60-40 34-84 98.5-148.5t148.5-98.5q25-11 35-35t0-49zm942-356l46 46-244 243 68 68q19 19 19 45.5t-19 45.5l-64 64q89 161 89 343 0 143-55.5 273.5t-150 225-225 150-273.5 55.5-273.5-55.5-225-150-150-225-55.5-273.5 55.5-273.5 150-225 225-150 273.5-55.5q182 0 343 89l64-64q19-19 45.5-19t45.5 19l68 68zm8-56q-10 10-22 10-13 0-23-10l-91-90q-9-10-9-23t9-23q10-9 23-9t23 9l90 91q10 9 10 22.5t-10 22.5zm230 230q-11 9-23 9t-23-9l-90-91q-10-9-10-22.5t10-22.5q9-10 22.5-10t22.5 10l91 90q9 10 9 23t-9 23zm41-183q0 14-9 23t-23 9h-96q-14 0-23-9t-9-23 9-23 23-9h96q14 0 23 9t9 23zm-192-192v96q0 14-9 23t-23 9-23-9-9-23v-96q0-14 9-23t23-9 23 9 9 23zm151 55l-91 90q-10 10-22 10-13 0-23-10-10-9-10-22.5t10-22.5l90-91q10-9 23-9t23 9q9 10 9 23t-9 23z" fill="#{$notifier-icon-danger-color}" /></svg>';
$notifier-icon-info: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#{$notifier-icon-info-color}" /></svg>';
$notifier-icon-muted: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path d="M1024 1376v-192q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v192q0 14 9 23t23 9h192q14 0 23-9t9-23zm256-672q0-88-55.5-163t-138.5-116-170-41q-243 0-371 213-15 24 8 42l132 100q7 6 19 6 16 0 25-12 53-68 86-92 34-24 86-24 48 0 85.5 26t37.5 59q0 38-20 61t-68 45q-63 28-115.5 86.5t-52.5 125.5v36q0 14 9 23t23 9h192q14 0 23-9t9-23q0-19 21.5-49.5t54.5-49.5q32-18 49-28.5t46-35 44.5-48 28-60.5 12.5-81zm384 192q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z" fill="#{$notifier-icon-muted-color}" /></svg>';
$notifier-icon-primary: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path d="M1120 576q0 13-9.5 22.5t-22.5 9.5-22.5-9.5-9.5-22.5q0-46-54-71t-106-25q-13 0-22.5-9.5t-9.5-22.5 9.5-22.5 22.5-9.5q50 0 99.5 16t87 54 37.5 90zm160 0q0-72-34.5-134t-90-101.5-123-62-136.5-22.5-136.5 22.5-123 62-90 101.5-34.5 134q0 101 68 180 10 11 30.5 33t30.5 33q128 153 141 298h228q13-145 141-298 10-11 30.5-33t30.5-33q68-79 68-180zm128 0q0 155-103 268-45 49-74.5 87t-59.5 95.5-34 107.5q47 28 47 82 0 37-25 64 25 27 25 64 0 52-45 81 13 23 13 47 0 46-31.5 71t-77.5 25q-20 44-60 70t-87 26-87-26-60-70q-46 0-77.5-25t-31.5-71q0-24 13-47-45-29-45-81 0-37 25-64-25-27-25-64 0-54 47-82-4-50-34-107.5t-59.5-95.5-74.5-87q-103-113-103-268 0-99 44.5-184.5t117-142 164-89 186.5-32.5 186.5 32.5 164 89 117 142 44.5 184.5z" fill="#{$notifier-icon-primary-color}" /></svg>';
$notifier-icon-secondary: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path d="M1696 960q0 26-19 45t-45 19h-224q0 171-67 290l208 209q19 19 19 45t-19 45q-18 19-45 19t-45-19l-198-197q-5 5-15 13t-42 28.5-65 36.5-82 29-97 13v-896h-128v896q-51 0-101.5-13.5t-87-33-66-39-43.5-32.5l-15-14-183 207q-20 21-48 21-24 0-43-16-19-18-20.5-44.5t15.5-46.5l202-227q-58-114-58-274h-224q-26 0-45-19t-19-45 19-45 45-19h224v-294l-173-173q-19-19-19-45t19-45 45-19 45 19l173 173h844l173-173q19-19 45-19t45 19 19 45-19 45l-173 173v294h224q26 0 45 19t19 45zm-480-576h-640q0-133 93.5-226.5t226.5-93.5 226.5 93.5 93.5 226.5z" fill="#{$notifier-icon-secondary-color}" /></svg>';
$notifier-icon-success: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path d="M813 1299l614-614q19-19 19-45t-19-45l-102-102q-19-19-45-19t-45 19l-467 467-211-211q-19-19-45-19t-45 19l-102 102q-19 19-19 45t19 45l358 358q19 19 45 19t45-19zm851-883v960q0 119-84.5 203.5t-203.5 84.5h-960q-119 0-203.5-84.5t-84.5-203.5v-960q0-119 84.5-203.5t203.5-84.5h960q119 0 203.5 84.5t84.5 203.5z" fill="#{$notifier-icon-success-color}" /></svg>';
$notifier-icon-warn: 'data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" height="1792" viewBox="0 0 1792 1792" width="1792"><path d="M1024 1375v-190q0-14-9.5-23.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 23.5v190q0 14 9.5 23.5t22.5 9.5h192q13 0 22.5-9.5t9.5-23.5zm-2-374l18-459q0-12-10-19-13-11-24-11h-220q-11 0-24 11-10 7-10 21l17 457q0 10 10 16.5t24 6.5h185q14 0 23.5-6.5t10.5-16.5zm-14-934l768 1408q35 63-2 126-17 29-46.5 46t-63.5 17h-1536q-34 0-63.5-17t-46.5-46q-37-63-2-126l768-1408q17-31 47-49t65-18 65 18 47 49z" fill="#{$notifier-icon-warn-color}" /></svg>';

// KEYFRAMES
@keyframes notifier-animation-enter-opacity { from { opacity: 0; } to { opacity: 1; } }
@keyframes notifier-animation-leave-opacity { from { opacity: 1; } to { opacity: 0; } }

// NOTIFIERS
ul[class*=notifier-] { list-style: none; padding-left: 0; position: fixed; }

ul[class*=notifier-] > li {
  background-position: center left $notifier-margin-x; background-repeat: no-repeat; background-size: $notifier-icon-size;
  border-radius: $notifier-border-radius; box-shadow: $notifier-shadow; cursor: pointer;
  padding: $notifier-padding-y $notifier-padding-x $notifier-padding-y ($notifier-icon-size + 2 * $notifier-padding-x);
  word-wrap: break-word; width: $notifier-width;
}
ul[class*=notifier-] > li:focus, ul[class*=notifier-] > li:hover { box-shadow: $notifier-shadow-hover; }
ul[class*=notifier-] > li:not(:last-of-type) { margin-bottom: $notifier-margin-y; }

ul[class*=notifier-] > li > .message { color: $notifier-message-color; }
ul[class*=notifier-] > li > .title { color: $notifier-title-color; font-weight: $notifier-title-font-weight; }

ul[class*=notifier-] > li.au-enter-active { animation: notifier-animation-enter-opacity .5s; }
ul[class*=notifier-] > li.au-leave-active { animation: notifier-animation-leave-opacity .5s; }

// POSITIONS
@each $x in (left, right) {
  @each $y in (bottom, top) {
    .notifier-#{$y}-#{$x} { #{$x}: $notifier-margin-x; #{$y}: $notifier-margin-y; }
  }
}

// TYPES
.notifier-danger { background: $danger-color url($notifier-icon-danger); }
.notifier-info { background: $info-color url($notifier-icon-info); }
.notifier-muted { background: $muted-color url($notifier-icon-muted); }
.notifier-primary { background: $primary-color url($notifier-icon-primary); }
.notifier-secondary { background: $secondary-color url($notifier-icon-secondary); }
.notifier-success { background: $success-color url($notifier-icon-success); }
.notifier-warn { background: $warn-color url($notifier-icon-warn); }
```