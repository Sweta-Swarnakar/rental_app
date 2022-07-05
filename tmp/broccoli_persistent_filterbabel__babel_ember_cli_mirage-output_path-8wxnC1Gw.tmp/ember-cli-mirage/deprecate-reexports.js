define("ember-cli-mirage/deprecate-reexports", ["exports", "miragejs", "ember-cli-mirage/index", "@embroider/macros/runtime"], function (_exports, mirage, ecMirageExports, _runtime) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initDeprecatedReExports = initDeprecatedReExports;
  const nonDeprecatedImports = ['default'];
  /**
   @function initDeprecatedReExports
   @hide
   */

  function initDeprecatedReExports() {
    Object.entries(mirage).forEach(_ref => {
      let [name, value] = _ref;

      if (!nonDeprecatedImports.includes(name)) {
        // eslint-disable-next-line no-import-assign
        Object.defineProperty(ecMirageExports, name, {
          get() {
            if ((0, _runtime.isTesting)() && true) {
              const {
                waitUntil,
                getContext
              } = require("@ember/test-helpers");

              window.QUnit.begin(function () {
                // Make sure deprecation message does not get "swallowed"
                // when tests run due to
                // https://github.com/emberjs/ember-test-helpers/blob/master/addon-test-support/%40ember/test-helpers/setup-context.ts#L41
                waitUntil(() => getContext() !== undefined).then(() => _deprecate(name));
              });
            } else {
              _deprecate(name);
            }

            return value;
          },

          enumerable: true
        });
      }
    });
  }

  function _deprecate(name) {
    const message = `Importing '${name}' from 'ember-cli-mirage' is deprecated.` + ` Install the \`miragejs\` package and use ` + `\`import { ${name} } from 'miragejs';\` instead.`;
    (true && !(false) && Ember.deprecate(message, false, {
      id: 'ember-cli-mirage.miragejs.import',
      until: '3.0.0',
      for: 'ember-cli-mirage',
      since: {
        enabled: '2.3.0'
      }
    }));
  }
});