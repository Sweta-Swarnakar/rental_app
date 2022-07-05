define("ember-cli-mirage/utils/inflector", ["exports", "miragejs", "ember-inflector", "ember-cli-mirage/deprecate-imports"], function (_exports, _miragejs, _emberInflector, _deprecateImports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.camelize = camelize;
  _exports.capitalize = capitalize;
  _exports.dasherize = dasherize;
  _exports.pluralize = pluralize;
  _exports.singularize = singularize;
  _exports.underscore = underscore;

  /**
   @function getStringMessage
   @hide
   */
  function getStringMessage(importName) {
    return `Importing '${importName}' from 'ember-cli-mirage/utils/inflector' is deprecated. ` + `Install the \`@ember/string\` package and use ` + `\`import { ${importName} } from '@ember/string';\` instead.`;
  }
  /**
   @function getInflectorMessage
   @hide
   */


  function getInflectorMessage(importName) {
    return `Importing '${importName}' from 'ember-cli-mirage/utils/inflector' is deprecated. ` + `Install the \`ember-inflector\` package and use ` + `\`import { ${importName} } from 'ember-inflector';\` instead.`;
  }
  /**
   @function camelize
   @hide
   */


  function camelize() {
    (0, _deprecateImports.deprecateNestedImport)(getStringMessage('camelize'));
    return (0, _miragejs._utilsInflectorCamelize)(...arguments);
  }
  /**
   @function dasherize
   @hide
   */


  function dasherize() {
    (0, _deprecateImports.deprecateNestedImport)(getStringMessage('dasherize'));
    return (0, _miragejs._utilsInflectorDasherize)(...arguments);
  }
  /**
   @function underscore
   @hide
   */


  function underscore() {
    (0, _deprecateImports.deprecateNestedImport)(getStringMessage('underscore'));
    return (0, _miragejs._utilsInflectorUnderscore)(...arguments);
  }
  /**
   @function capitalize
   @hide
   */


  function capitalize() {
    (0, _deprecateImports.deprecateNestedImport)(getStringMessage('capitalize'));
    return (0, _miragejs._utilsInflectorCapitalize)(...arguments);
  }
  /**
   @function singularize
   @hide
   */


  function singularize() {
    (0, _deprecateImports.deprecateNestedImport)(getInflectorMessage('singularize'));
    return (0, _emberInflector.singularize)(...arguments);
  }
  /**
   @function pluralize
   @hide
   */


  function pluralize() {
    (0, _deprecateImports.deprecateNestedImport)(getInflectorMessage('pluralize'));
    return (0, _emberInflector.pluralize)(...arguments);
  }
});