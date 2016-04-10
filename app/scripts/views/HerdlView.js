import $ from 'jquery';
import Backbone from 'backbone';


const HerdlView = Backbone.View.extend({
	className: 'col col-sm-6 col-md-4',
	events: {},
	initialize: function(image_url, url, title, body, zip, votes) {
		this.image_url = image_url;
		this.url = url;
		this.title = title;
		this.body = body;
		this.zip = zip;
		this.votes = votes;
		this.render();
	},
	template: function() {
		return `
            <div class="place">
            <p>${this.title}</p>
            <img src="${this.image_url}">
            <p>${this.body}</p>
            <div><span>${this.votes}</span></div>
            </div>
		`
	},
	render: function() {
		this.$el.append(this.template());
		// $('#to_do_list').append(this.el);
	},

	completeItems: function() {
		// this.$el.toggleClass('complete');
	},

	removeItems: function() {
		// this.$el.remove();
	}
}); 

// i think the vote click event needs to live here!!!


export default HerdlView