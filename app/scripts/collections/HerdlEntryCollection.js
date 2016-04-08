import Backbone from 'backbone';
import HerdlEntryModel from '../models/HerdlEntryModel';


const HerdlEntryCollection = Backbone.Collection.extend({
	model: HerdlEntryModel,
	url: 'https://herdle-app.herokuapp.com/api/entries'
});

export default HerdlEntryCollection