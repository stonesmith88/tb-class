console.log('router, rOuTeR, RoUtEr, ROUTER')

//function dog (){
//	this.legs: 4;
//}
//
//var kujo = new dog();
//
//artist/:artist/album/:album
//same as
//artist/artist-name/album/album-name
//AppRouter = Backbone.Router.extend ({
//	routes: {
//		""      : "loginScreen",
//		"home"  : "loginScreen",
//
//	},
//})
AppRouter = Backbone.Router.extend({

	routes:{
		'home' : 'splashPage',

	},

	initialize: function() {

	},


})









var router = new AppRouter()
Backbone.history.start()