define("ember-cli-mirage/deprecate-imports", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.deprecateImport = deprecateImport;
  _exports.deprecateNestedImport = deprecateNestedImport;
  _exports.getMessage = getMessage;

  /**
   @function getMessage
   @hide
   */
  function getMessage(importName) {
    return `Importing '${importName}' from 'ember-cli-mirage' is deprecated. ` + `Install the \`miragejs\` package and use ` + `\`import { ${importName} } from 'miragejs';\` instead.`;
  }
  /**
   @function deprecateImport
   @hide
   */


  function deprecateImport(importName) {
    (true && !(false) && Ember.deprecate(getMessage(importName), false, {
      id: 'ember-cli-mirage.miragejs.import',
      until: '3.0.0',
      for: 'ember-cli-mirage',
      since: {
        enabled: '2.3.0'
      }
    }));
  }
  /**
   @function deprecateNestedImport
   @hide
   */


  function deprecateNestedImport(message) {
    (true && !(false) && Ember.deprecate(message, false, {
      id: 'ember-cli-mirage.miragejs.import',
      until: '3.0.0',
      for: 'ember-cli-mirage',
      since: {
        enabled: '2.3.0'
      }
    }));
  }
});