define('rental-app/tests/lint/templates.template.lint-test', [], function () {
  'use strict';

  QUnit.module('TemplateLint');

  QUnit.test('rental-app/templates/about.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'rental-app/templates/about.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('rental-app/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'rental-app/templates/application.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('rental-app/templates/components/list-filter.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'rental-app/templates/components/list-filter.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('rental-app/templates/components/rental-listing.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'rental-app/templates/components/rental-listing.hbs should pass TemplateLint.\n\nrental-app/templates/components/rental-listing.hbs\n  11:3  error  Incorrect indentation for `<span>` beginning at L11:C3. Expected `<span>` to be at an indentation of 4 but was found at 3.  block-indentation\n  2:5  error  Interaction added to non-interactive element  no-invalid-interactive\n  2:14  error  you must use double quotes in templates  quotes\n');
  });

  QUnit.test('rental-app/templates/contact.hbs', function (assert) {
    assert.expect(1);
    assert.ok(false, 'rental-app/templates/contact.hbs should pass TemplateLint.\n\nrental-app/templates/contact.hbs\n  19:3  error  Incorrect indentation for `{{#link-to}}` beginning at L19:C3. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 3.  block-indentation\n  21:14  error  Incorrect indentation for `link-to` beginning at L19:C3. Expected `{{/link-to}}` ending at L21:C14 to be at an indentation of 3 but was found at 2.  block-indentation\n  20:4  error  Incorrect indentation for `About Us\n  ` beginning at L20:C4. Expected `About Us\n  ` to be at an indentation of 5 but was found at 4.  block-indentation\n');
  });

  QUnit.test('rental-app/templates/index.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'rental-app/templates/index.hbs should pass TemplateLint.\n\n');
  });

  QUnit.test('rental-app/templates/rentals.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'rental-app/templates/rentals.hbs should pass TemplateLint.\n\n');
  });
});