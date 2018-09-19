// lnstagram Graph Crawl

// Marketers using our platform would like to be able to browse a list of every popular person on lnstagram in order to be able to look for people that might promote their brand. In order to build up that list, your first task will be to crawl the nstagram API and return a list of lnstagram accounts that each have at least 5,000 followers.

// Assume that you have access to the following API endpoints that return the following data:

// GET /account/<instagram_id>

// {
// 'instagram_id': <string>,
// 'username': <string>,
// 'biography': <string>,
// 'follower_count': <integer>,
// }
// GET /account/<instagram_id>/followers?cursor=<optional_cursor>
// {
// 'data': [
// <instagram_id>,
// <instagram_id>,
// ].
// 'next_page_cursor': null, // Identifier that can be provided in API request to fetch next
// page of results
// }

// For context, lnstagram accounts can follow other lnstagram accounts, which means that there is a social graph where the nodes are lnstagram accounts and the edges are "follows". By retrieving the followers of an account, the followers of those followers, and so on, you can crawl this lnstagram graph until you've crawled the entire lnstagram graph, which you can then filter to return a list of popular accounts.

// The first endpoint above returns some basic information about the account given the instagram_id for the account. The second returns a list of instagram_ids of the lnstagram accounts that follow the account associated with the given instagram_id. The followers API takes an optional cursor parameter, which is used for paging results. If the API returns a non-null value for the 'next_page_cursor', then there are additional follower ids that can be retrieved by passing that cursor value to the API.

// Your task is to implement a function that takes a seed lnstagram ID from which to begin crawling the API by making mock API calls to the methods above in order to return a list of influential lnstagram accounts objects. Although the example code below is written in Python, feel free to use whatever programming language you are most comfortable with to complete this problem (although a preference for modern object oriented languages is preferred):

// Top level function to crawl instagram accounts

// Note the following:

// The followers property of the InstagramAccount object should reference a list of other InstagramAccount objects,
// rather than a list of IDs

// You should assume you have enough memory to store the data locally on the machine that is running this code regardless of how large the lnstagram social graph is.

// starting call
const url = 'https://instagram.com/account/<instagram_id>';
let popularAcct = [];

// api call to get user data obj
let getUserProfile = function (url){

    return fetch(url)
	.then(resp => {
		if (resp.status > 400 && resp.status < 499) {
			throw Error(`Request rejected with status ${resp.status}`);
		} else if (resp.status >= 500) {
			throw Error(`Server error status ${resp.status}`);
		} else {
			return resp.json();
		}
	})
	.catch(console.error);
}

let InstagramAccount = {};

// getUserFollowers
function getUserFollowers(id, optional){
    return fetch( `https://instagram.com/account/${id}/followers?${optional}`)
	.then(resp => {
		if (resp.status > 400 && resp.status < 499) {
			throw Error(`Request rejected with status ${resp.status}`);
		} else if (resp.status >= 500) {
			throw Error(`Server error status ${resp.status}`);
		} else {
			return resp.json();
		}
	})
	.catch(console.error);
}

// add user that has more than 5000 followers
const minFollowers = 5000;

function addPopularAcct( data ){

    data.forEach(function( item ) {
        if( item.follower_count >= minFollowers ){
            popularAcct.push( item.instagram_id );
        }
    });
}


let data = getUserProfile(url)
let userFollowersAccounts = getUserFollowers(data)
addPopularAcct(userFollowersAccounts)