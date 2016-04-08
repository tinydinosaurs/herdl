import Backbone from 'backbone';

const HerdlEntryModel = Backbone.Model.extend({
	defaults: {
		image_url: '',
		url: '',
		title: '',
		body: '',
		zip: '',
		votes_count: '',
	},
	idAttribute: 'id',
	urlRoot: 'https://herdle-app.herokuapp.com/api/entries'	
});





export default HerdlEntryModel