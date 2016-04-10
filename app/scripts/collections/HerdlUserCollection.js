import Backbone from 'backbone';
import HerdlUserModel from '../models/HerdlUserModel';

const HerdlUserCollections = Backbone.Collection.extend({
	model: HerdlUserModel,
	url: ''
});


export default HerdlUserCollections