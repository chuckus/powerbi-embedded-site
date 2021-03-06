import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pbi-breadcrumbs', 'Integration | Component | pbi breadcrumbs', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{pbi-breadcrumbs}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#pbi-breadcrumbs}}
      template block text
    {{/pbi-breadcrumbs}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
