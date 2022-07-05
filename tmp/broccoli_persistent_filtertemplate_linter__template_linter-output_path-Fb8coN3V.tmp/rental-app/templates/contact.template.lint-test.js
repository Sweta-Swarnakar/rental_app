QUnit.test('rental-app/templates/contact.hbs', function(assert) {
  assert.expect(1);
  assert.ok(false, 'rental-app/templates/contact.hbs should pass TemplateLint.\n\nrental-app/templates/contact.hbs\n  19:3  error  Incorrect indentation for `{{#link-to}}` beginning at L19:C3. Expected `{{#link-to}}` to be at an indentation of 2 but was found at 3.  block-indentation\n  21:14  error  Incorrect indentation for `link-to` beginning at L19:C3. Expected `{{/link-to}}` ending at L21:C14 to be at an indentation of 3 but was found at 2.  block-indentation\n  20:4  error  Incorrect indentation for `About Us\n  ` beginning at L20:C4. Expected `About Us\n  ` to be at an indentation of 5 but was found at 4.  block-indentation\n');
});
