define("ember-cli-mirage/orm/schema", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedSchema
   @hide
   */
  class DeprecatedSchema extends _miragejs._ormSchema {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'Schema' from 'ember-cli-mirage/orm/schema' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _ormSchema } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedSchema;
});