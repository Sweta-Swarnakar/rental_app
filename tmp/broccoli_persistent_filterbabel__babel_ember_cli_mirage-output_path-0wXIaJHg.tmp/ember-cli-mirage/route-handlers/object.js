define("ember-cli-mirage/route-handlers/object", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedObjectRouteHandler
   @hide
   */
  class DeprecatedObjectRouteHandler extends _miragejs._routeHandlersObject {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'ObjectRouteHandler' from 'ember-cli-mirage/route-handlers/object' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _routeHandlersObject } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedObjectRouteHandler;
});