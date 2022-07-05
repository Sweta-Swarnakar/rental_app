define("ember-cli-mirage/orm/model", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedModel
   @hide
   */
  class DeprecatedModel extends _miragejs.Model {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'Model' from 'ember-cli-mirage/orm/model' is deprecated. ` + `Install the \`miragejs\` package and use \`import { Model } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedModel;
});