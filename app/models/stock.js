import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  symbol: DS.attr('string'),
  quotes: DS.hasMany('quote', {async: true})
});
