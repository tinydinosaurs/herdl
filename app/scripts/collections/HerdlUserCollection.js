import Backbone from 'backbone';
import HerdlUserModel from '../models/ToDoListModel';

const HerdlEntryCollection = Backbone.Collection.extend({
	model: HerdlUserModel,
	url: ''
});


export default HerdlUserCollections