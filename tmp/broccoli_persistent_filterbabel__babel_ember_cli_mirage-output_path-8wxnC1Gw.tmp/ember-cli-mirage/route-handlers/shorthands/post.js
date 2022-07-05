define("ember-cli-mirage/route-handlers/shorthands/post", ["exports", "miragejs", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /**
   @class DeprecatedPostShorthandRouteHandler
   @hide
   */
  class DeprecatedPostShorthandRouteHandler extends _miragejs._routeHandlersShorthandsPost {
    constructor() {
      (0, _deprecateImports.deprecateNestedImport)(`Importing 'PostShorthandRouteHandler' from 'ember-cli-mirage/route-handlers/shorthands/post' is deprecated. ` + `This wasn't intended to be a public API. If you absolute know what you are doing, ` + `install the \`miragejs\` package and use \`import { _routeHandlersShorthandsPost } from 'miragejs';\` instead.`);
      super(...arguments);
    }

  }

  _exports.default = DeprecatedPostShorthandRouteHandler;
});