//and collection
console.log('model and collection, RaH, rAh, RAH')

Post = Backbone.Model.extend({
	defaults: {
		"image"   : "http://placehold.it/300x300",
		"caption" : "no caption"
	}
	initialize:
})

PostCollection = Backbone.Collection.extend({
	
	model: Post;

})