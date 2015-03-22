/*global Backbone, Homeloan*/
var Homeloans;

Homeloans = Backbone.Collection.extend({
  'model': Homeloan,
  'customFilter': function (filters) {
    return new Homeloans(this.where(filters));
  },
  'search': function (letters) {
    var pattern, results;

    if (letters === '') {
      return this.filter();
    }

    pattern = new RegExp(letters, 'gi');

    results = this.filter(function (data) {
      return pattern.test(data.get('title'));
    });

    return new Homeloans(results).filter();
  }
});
