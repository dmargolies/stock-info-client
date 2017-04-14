import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    //we have no index, always go right to search
    this.replaceWith('stocks');
  }
});
