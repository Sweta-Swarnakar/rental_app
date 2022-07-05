define("ember-cli-mirage/route-handlers/shorthands/base", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedBaseShorthandRouteHandler
   @hide
   */
  class DeprecatedBaseShorthandRouteHandler extends _miragejs._routeHandlersShorthandsBase {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'BaseShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/base' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsBase } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedBaseShorthandRouteHandler;
});