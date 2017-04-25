import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('most-wanted', 'Integration | Component | most wanted', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{most-wanted}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#most-wanted}}
      template block text
    {{/most-wanted}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
