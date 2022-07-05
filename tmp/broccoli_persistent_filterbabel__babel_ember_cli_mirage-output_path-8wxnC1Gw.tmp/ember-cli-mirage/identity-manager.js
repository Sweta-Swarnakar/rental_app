define("ember-cli-mirage/identity-manager", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedIdentityManager
   @hide
   */
  class DeprecatedIdentityManager extends _miragejs.IdentityManager {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'IdentityManager' from 'ember-cli-mirage/identity-manager' is deprecated. ` + `Install the \`miragejs\` package and use \`import { IdentityManager } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedIdentityManager;
});