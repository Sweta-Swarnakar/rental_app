define("ember-cli-mirage/route-handlers/shorthands/delete", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedDeleteShorthandRouteHandler
   @hide
   */
  class DeprecatedDeleteShorthandRouteHandler extends _miragejs._routeHandlersShorthandsDelete {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'DeleteShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/delete' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsDelete } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedDeleteShorthandRouteHandler;
});