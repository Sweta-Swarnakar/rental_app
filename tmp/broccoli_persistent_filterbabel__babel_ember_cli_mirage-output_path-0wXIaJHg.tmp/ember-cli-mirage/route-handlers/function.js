define("ember-cli-mirage/route-handlers/function", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedFunctionRouteHandler
   @hide
   */
  class DeprecatedFunctionRouteHandler extends _miragejs._routeHandlersFunction {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'FunctionRouteHandler' from 'ember-cli-mirage/route-handlers/function' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _routeHandlersFunction } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedFunctionRouteHandler;
});