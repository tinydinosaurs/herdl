import Backbone from 'backbone';


const HerdlUserModel = Backbone.Model.extend({
	defaults: {
		name: '',
		username: '',
		password: '',
		profile_pic: '',
	},
	idAttribute: 'id',
	urlRoot: ''	
});




export default HerdlUserModel