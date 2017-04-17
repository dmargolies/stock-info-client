import DS from 'ember-data';

export default DS.Model.extend({
  trade_date: DS.attr('string'), //line-chart handles conversion to date for now
  high: DS.attr('number'),
  low: DS.attr('number'),
  open: DS.attr('number'),
  close: DS.attr('number'),
  stock: DS.belongsTo('stock', {async: true})
});
