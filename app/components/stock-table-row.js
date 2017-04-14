import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  classNameBindings: ['selected'],
  selected: function() {
    const selectedStock = this.get('selectedStock');
    return this.get('selectedStock') === this.get('stock');
  }.property('selectedStock', 'stock'),
  click() {
    this.get('onSelect')(this.get('stock'));
  }
});
