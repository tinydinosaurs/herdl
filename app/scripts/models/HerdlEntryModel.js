import Backbone from 'backbone';

const HerdlEntryModel = Backbone.Model.extend({
	defaults: {
		id: null,
		image_url: 'please provide a photo url',
		url: 'please provide a website',
		title: 'please provide a title',
		body: 'please provide a description',
		zip: 'please provide a zip code',
		votes: '0',
	},
	idAttribute: 'id',
	urlRoot: 'https://herdle-app.herokuapp.com/api/entries'	
});

export default HerdlEntryModel