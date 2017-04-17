import Ember from 'ember';

//const parseTime = d3.timeParse("%d-%b-%y");
const parseTime = d3.timeParse("%Y-%m-%d");

export default Ember.Component.extend({
  tagName: 'svg',
  width: 585,
  height: 250,
  attributeBindings: ['width', 'height'],
  didRender() {
    const quotes = this.get('quotes');

    //modified from https://bl.ocks.org/mbostock/3883245
    const svg = d3.select("svg"),
      margin = {top: 20, right: 20, bottom: 30, left: 50},
      width = +svg.attr("width") - margin.left - margin.right,
      height = +svg.attr("height") - margin.top - margin.bottom,
      g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    const x = d3.scaleTime()
      .rangeRound([0, width]);

    const y = d3.scaleLinear()
      .rangeRound([height, 0]);

    const line = d3.line()
      .x(function(d) { return x(d.date); })
      .y(function(d) { return y(d.close); });

    const data  = quotes.map((quote) => {
      return {
        date: parseTime(quote.get('trade_date')),
        close: quote.get('close')
      }
    });

    x.domain(d3.extent(data, function(d) { return d.date; }));
    y.domain(d3.extent(data, function(d) { return d.close; }));

    g.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .select(".domain")
      .remove();

    g.append("g")
      .call(d3.axisLeft(y))
      .append("text")
      .attr("fill", "#000")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", "0.71em")
      .attr("text-anchor", "end")
      .text("Price ($)");

    g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("stroke-width", 1.5)
      .attr("d", line);
  },
  didUpdateAttrs() {
    d3.select("svg").html(null);
  }
});
