/*global Backbone*/

var myHomeloans, myFilteredView, filteredCollection;

myHomeloans = new Homeloans();

filteredCollection = new Backbone.Collection();

myFilteredView = new FilteredView({
  'collection': filteredCollection,
  'originalCollection': myHomeloans
});

myHomeloans.fetch({ 'url': './data/homeloans.json'})
  .complete(function () {
    myFilteredView.render();
    myFilteredView.filterList();
  });
