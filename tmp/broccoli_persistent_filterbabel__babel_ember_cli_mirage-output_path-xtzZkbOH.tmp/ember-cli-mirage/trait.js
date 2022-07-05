define("ember-cli-mirage/trait", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  /**
   @function trait
   @hide
   */
  function _default() {
    (0, _deprecateImports.deprecateNestedImport)("Importing 'trait' from 'ember-cli-mirage/trait' is deprecated. " + "Add the `miragejs` package to devDependencies and use `import { trait } from 'miragejs';` instead.");
    return (0, _miragejs.trait)(...arguments);
  }
});