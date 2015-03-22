/*global Backbone*/
var FilteredView;

// View
FilteredView = Backbone.View.extend({
  'el': '#comparison',
  'events': {
    'submit form': 'filterList'
  },
  initialize: function(settings){
  	this.originalCollection = settings.originalCollection;
    this.listenTo(this.collection, "reset", this.render, this);
  }, 
  'render': function () {
    var html = [], template = _.template($('#comparison-list-item-template').html());

    this.collection.each(function (item) {
      html.push(template(item.toJSON()));
    });

    $("#comparison-listing").html(html);

    return this;
  },
  'filterList': function (ev) {
    // get the search
    this.collection.reset(this.originalCollection.search($('#comparison-search').val()));

    // sort by something...
    return false;
  }
});
