

// var goodMorningTemplate = _.template ($('.goodmorning-template').text);

// var renderedTemplate = goodMorningTemplate({
// 	person: "Mason",
// 	feeling: "great",
// });

// console.log();

// $('body').prepend(morningMason);


// var nameTemplate = _.template ($('.name-template').text);

// var renderedNameTag = nameTemplate({
// 	person: "luke";
// })

// console.log(renderedNameTag);


console.log('main')

//Creating the renderRepo function. This looks through the repoData
// from github.
function renderRepo(data) {


//This underscore method sorts the updated_at property and reverses it
//to display in the right order. 
	_.sortBy(data, function(obj){ 
		return obj.updated_at
		 }).reverse()
	
	

	// forEach through the repoData which is an object.
	.forEach(function(obj){
		
	
		// _.sortBy(obj,(function(obj){updated_at});

			
		
		
		// This takes my script class objectName and stores it in a
		// template called repoInfo.
		var repoInfo = _.template ($('.objectName').text());
		// console.log(object.name);
		


		// This takes my template repoInfo with the data from my forEach,
		// obj, and stores it in the variable renderedObject.
		var renderedObject = repoInfo(obj);
		console.log(renderedObject);


		// Now I take renderedObject and append it to the listContainer div.
		$('.listContainer').append(renderedObject);
		});
};

// $.getJSON... gets the api data from github. .done makes js finish
// getting all the data before it moves on to the next thing. 
// The next thing is to run my function called renderRepo.
// console.log($.getJSON('https://api.github.com/users/luukeout/repos?client_id=&client_secret='))
$.getJSON('https://api.github.com/users/luukeout/repos?client_id=&client_secret=').done(function(data){
	renderRepo(data);
});

$.getJSON('https://api.github.com/users/luukeout?client_id=&client_secret=').done(function(data){
	renderUser(data);
});

// This function is just like the above without the forEach. It's pull info data
// from an object, not an array. 
function renderUser(data) {
	var userInfo = _.template ($('.leftBar').text());
	var renderedUser = userInfo(data);
	$('.leftBar').append(renderedUser);
};

// https:api.github.com/users/whatever?client_id=xxxx&client_secret=yyyy
















