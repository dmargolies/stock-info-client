import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search(query) {
      //TODO - we may want to debounce the search (or keyup event)
      //to prevent overloading the server when the user is typing
      const controller = this.controllerFor('stocks');
      query = query.trim();
      if(!query) {
        controller.set('model', null);
      } else {
        this.get('store').query('stock', {query}).then((stocks) => {
          this.controllerFor('stocks').set('model', stocks);
        });
      }
    }
  }
});
