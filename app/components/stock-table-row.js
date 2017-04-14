import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNames: ['selectable'],
  classNameBindings: ['selected:active'],
  selected: function() {
    return this.get('selectedStock') === this.get('stock');
  }.property('selectedStock', 'stock'),
  click() {
    this.get('onSelect')(this.get('stock'));
  }
});
