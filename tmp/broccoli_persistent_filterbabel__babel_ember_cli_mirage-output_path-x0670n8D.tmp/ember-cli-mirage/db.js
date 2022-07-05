define("ember-cli-mirage/db", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedDB
   @hide
   */
  class DeprecatedDB extends _miragejs._Db {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'Db' from 'ember-cli-mirage/db' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _Db } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedDB;
});