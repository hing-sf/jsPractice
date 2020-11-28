let animals = {
    'boxer': 'dog',
    'fluffy': 'cat',
    'husky': 'dog',
    'poodle': 'dog',
    'fluffy2': 'cat',
    'fluffy3': 'cat'
}

// sort animals using reduce method
function sortAnimals(animals) {
    return Object.keys(animals).reduce((prev, key) => {
        if (animals[key] === 'dog') {
            prev.dog.push(key)
        }
        if (animals[key] === 'cat') {
            prev.cat.push(key)
        }
        return prev;
    }, { 'dog': [], 'cat': []});
}

console.log(sortAnimals(animals))



// duplicate array
let arr1 = [1, 2];
let arr2 = [1, 2];
let dupArray = arr1.concat(arr2)

console.log(dupArray);