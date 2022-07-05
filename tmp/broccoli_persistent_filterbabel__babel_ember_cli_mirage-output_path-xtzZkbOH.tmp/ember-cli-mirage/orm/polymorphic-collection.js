define("ember-cli-mirage/orm/polymorphic-collection", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedPolymorphicCollection
   @hide
   */
  class DeprecatedPolymorphicCollection extends _miragejs._ormPolymorphicCollection {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'PolymorphicCollection' from 'ember-cli-mirage/orm/polymorphic-collection' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _ormPolymorphicCollection } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedPolymorphicCollection;
});