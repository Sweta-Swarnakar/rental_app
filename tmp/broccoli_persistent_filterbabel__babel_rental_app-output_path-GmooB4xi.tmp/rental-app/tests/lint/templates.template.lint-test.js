define('rental-app/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('rental-app/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'rental-app/templates/application.hbs should pass TemplateLint.\n\n');
  });
});