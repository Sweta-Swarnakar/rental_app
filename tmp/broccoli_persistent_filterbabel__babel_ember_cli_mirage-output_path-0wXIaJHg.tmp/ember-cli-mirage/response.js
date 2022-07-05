define("ember-cli-mirage/response", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedResponse
   @hide
   */
  class DeprecatedResponse extends _miragejs.Response {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'Response' from 'ember-cli-mirage/response' is deprecated. ` + `Install the \`miragejs\` package and use \`import { Response } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedResponse;
});