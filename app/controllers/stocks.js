import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    select(stock) {
      this.set('selectedStock', stock);
      this.set('quotesError', null);
      //TODO why do we have to call "reload"
      //(may be because a data key/null value is sent
      //with the relationship json)
      stock.hasMany('quotes').reload().then((quotes) => {
        this.set('quotes', quotes);
      }).catch((error) => {
        this.set('quotes', null);
        this.set('quotesError', 'Unable to load quotes');
        Ember.Logger.error('failed to load quotes for stock ' + stock.id, error);
      });
    }
  }
});
