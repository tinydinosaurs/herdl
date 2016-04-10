import Backbone from 'backbone';
import HerdlVotesModel from '../models/HerdlVotesModel';


const HerdlVotesCollection = Backbone.Collection.extend({
	model: HerdlVotesModel,
	url: 'https://herdle-app.herokuapp.com/api/entries'
});

export default HerdlVotesCollection