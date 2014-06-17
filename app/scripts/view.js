console.log('view, vIeW, ViEw, VIEW')
//router is kind of an on switch or a controller of an app
SplashPageView = Backbone.View.extend({

	className: "heather",

	template: _.template( $('#splash-view-template').text() )

	events: {

	},
{
	initialize: function() {
		$('.container').append(this.el);
		this.render;
	},

	render: function(){
		
	},


})