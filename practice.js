// You are given a list of movies with release years
// return n most recent movies preserving initial order
// Example:
// const movies = [{name: "MovieA", year: 2010},{name: "MovieD", year: 2001},{name: "MovieB", year: 2001},{name: "MovieC", year: 2020}]
// console.log(nRecent(movies, 2))
// [{name: 'MovieA', year: '2010'},{name: 'MovieC', year: '2020'}]
// console.log(nRecent(movies, 3))
// [{name: 'MovieA', year: '2010'},{name: "MovieD", year: 2001},{name: 'MovieC', year: '2020'}]

const movies = [
	{ name: 'MovieA', year: 2010 },
	{ name: 'MovieD', year: 2001 },
	{ name: 'MovieB', year: 2018 },
	{ name: 'MovieR', year: 2016 },
	{ name: 'MovieG', year: 2002 },
	{ name: 'MovieZ', year: 2001 },
	{ name: 'MovieF', year: 2020 }
];

// function nRecent(movies, num) {
// 	// check if movies is less than the requested num, return the movies
// 	if (movies.length <= num) return movies;

// 	let newList = [];
// 	let high = { index: null, year: null };
// 	let low = { index: null, year: null };

// 	for (let i = 0; i < movies.length; i++) {
// 		if (i === 0) {
// 			newList = [...newList, movies[i]];
// 			high = { index: i, year: movies[i].year };
// 		}
// 		// set low var
// 		else if (i < num) {
// 			newList = [...newList, movies[i]];
// 			if (movies[i].year > high.year) {
// 				low = high;
// 				high = { index: i, year: movies[i].year };
// 			} else if (movies[i].year < high.year) {
// 				low = { index: i, year: movies[i].year };
// 			}
// 		} else {

// 			if (movies[i].year > high.year) {
// 				newList[low.index];
// 				newList.splice(low.index, 1, movies[i]);
// 				low = { index: i, year: movies[i].year };
// 			}
// 		}

// 	}
// 	console.log('newList', newList);
// 	console.log('high', high);
// 	console.log('low', low);
// }

// const result = console.log('result', nRecent(movies, 6));

function nRecent(movies, num) {
	// check if movies is less than the requested num, return the movies
	if (movies.length < num) return movies;

	function sortList(list, target) {
		return list.sort((a, b) => {
			console.log('a', a);
			console.log('b', b);

			if (a[target] < b[target]) return -1;
			if (a[target] > b[target]) return 1;
			return 0;
		});
	}

	let listWithIdx = movies.map((el, idx) => {
		el.order = idx + 1;
		return el;
	});

	const sorted = sortList(listWithIdx, 'year');

	const result = sorted.slice(movies.length - num);
	// return sortList(result, 'order');
}

const result = console.log('result', nRecent(movies, 4));
