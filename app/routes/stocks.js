import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    search(query) {
      //TODO - we may want to debounce the search (or keyup event)
      //to prevent overloading the server when the user is typing
      //TODO - since we are doing a prefix search we should only
      //make an ajax request when the first letter changes
      //and just filter locally at other times
      const controller = this.controllerFor('stocks');
      query = query.trim();
      if(!query) {
        controller.set('model', null);
      } else {
        this.get('store').query('stock', {query}).then((stocks) => {
          this.controllerFor('stocks').set('model', stocks);
        }).catch((error) => {
          Ember.Logger.error('failed to query for stock with string ' + query, error);
        });
      }
    }
  }
});
