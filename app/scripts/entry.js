// import the stylesheet. this is necessary so that webpack will compile all the sass into css and then build it into our style.css file
import '../scss/main.scss';

import $ from 'jquery';
import HerdlView from './views/HerdlView';
import HerdlEntryCollection from './collections/HerdlEntryCollection';
import HerdlUserCollection from './collections/HerdlUserCollection';

// For our purposes, 'entries' are the collections of data users provide the herdl app

// create new collection of user submissions to herdl
let herdlEntries = new HerdlEntryCollection();

// define settings for collection
var settings = {
	// on success, do the following to each element in the collection of herdl entries
	success: function() {
		herdlEntries.forEach((entry) => {
			// console.log(entry.get('title'));
			let entryView = new HerdlView(
				entry.get('image_url'),
				entry.get('url'),
				entry.get('title'),
				entry.get('body'),
				entry.get('zip'),
				entry.get('aggregate_votes'),
				entry.get('id')
				// entry.get('votes_count')
			);
			$('.card-box').append(entryView.el);
		});
	}
};

herdlEntries.fetch(settings);

$('.submit').on('click', (e) => {
	e.preventDefault();
	let newHerdl = {
		title: $('.title').val(),
		image_url: $('.image-url').val(),
		body: $('.description').val(),
		url: $('.website').val(),
		zip: $('.zip-code').val()
	}
	console.log(newHerdl.title);
	$('.entry').val('');
	
 herdlEntries = $.post( "https://herdle-app.herokuapp.com/api/entries", 
           {newHerdl});

});

// $('.vote').on('click', (e) => {
// 	e.preventDefault();
// 	$.post( "https://herdle-app.herokuapp.com/api/entries/14/votes");
// 	console.log('i did something');
// });

// for vote counts https://herdle-app.herokuapp.com/api/entries/id/votes

