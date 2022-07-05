define("ember-cli-mirage/association", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _default;

  /**
   @function association
   @hide
   */
  function _default() {
    (0, _deprecateImports.deprecateNestedImport)("Importing 'association' from 'ember-cli-mirage/association' is deprecated. " + "Add the `miragejs` package to devDependencies and use `import { association } from 'miragejs';` instead.");
    return (0, _miragejs.association)(...arguments);
  }
});