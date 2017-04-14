import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    select(stock) {
      this.set('selectedStock', stock);
    }
  }
});
