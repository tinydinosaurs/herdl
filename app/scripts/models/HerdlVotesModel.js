import Backbone from 'backbone';

const HerdlVotesModel = Backbone.Model.extend({
	defaults: {
		id: null,
		vote_count: 0
	}
});

export default HerdlVotesModel