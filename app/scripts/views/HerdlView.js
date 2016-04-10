import $ from 'jquery';
import Backbone from 'backbone';


const HerdlView = Backbone.View.extend({
	className: 'col s12 m6 l4',
	events: {
		'click .favorite': 'favorite',
		'click .up': 'upVote',
		'click .down': 'downVote'
	},
	initialize: function(image_url, url, title, body, zip, votes, id) {
		this.image_url = image_url;
		this.url = url;
		this.title = title;
		this.body = body;
		this.zip = zip;
		this.votes = votes;
		this.id = id;
		this.render();
		this.delegateEvents();
	},
	template: function() {
		return `
            <div class="card">
            	<div class="card-image">
            		<img src="${this.image_url}">
            		<span class="card-title">${this.title}</span>
            	</div>
				<div class="card-content">
					<p>${this.body}</p>
				</div>	
				<div class="card-action">
					<a href="${this.url}">${this.title} website</a>
					<p><i class="small material-icons up">thumb_up</i>&nbsp;
					<i class="small material-icons down">thumb_down</i>&nbsp;
					${this.votes}<span><i class="material-icons favorite">favorite</i></span></p>
				</div>
            </div>
		`
	},
	render: function() {
		this.$el.append(this.template());
		// $('#to_do_list').append(this.el);
	},

	upVote: function() {
		console.log('thumbs up');
		console.log(this.id);
		let up_vote = 1;
		let down_vote = 0;
		$.post( `https://herdle-app.herokuapp.com/api/entries/${this.id}/votes`, {up_vote, down_vote});
		// this.$el.toggleClass('complete');
	},

	downVote: function() {
		console.log('thumbs down');
		let up_vote = 0;
		let down_vote = 1;
		$.post(`https://herdle-app.herokuapp.com/api/entries/${this.id}/votes`, {up_vote, down_vote});
		// this.$el.remove();
	},

	favorite: function(heart) {
		$(heart.currentTarget).toggleClass('selected');
		console.log('i heart you');
	}
}); 

// i think the vote click event needs to live here!!!
// $('.vote').on('click', (e) => {
// 	e.preventDefault();
// 	$.post( "https://herdle-app.herokuapp.com/api/entries/14/votes");
// 	console.log('i did something');
// });

export default HerdlView