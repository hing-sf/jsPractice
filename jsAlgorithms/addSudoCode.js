// write a function which take in a string and return the counts of each character in the string.

charCount('aaaa'); // {a:4}
charCount('hello'); // {h:1, e:1, l:2, 0:1 }

// function charCount( str ) {
//     // do something

//     // return object with keys that are lowercase alphanumeric characters in the string: values should be
// }

function charCount( str ) {
    // make object return at end
    let result = {};
    // loop over string for each char
    for(let i = 0; i < str.length; i++){
        var char = str[i].toLowerCase();
        // if char is key in object, add one to count
        if( result[i] ){
            result[i]++
        }
        // if the char is not in object, add char to the object and set value to 1
        else {
            result[i] = 1;
        }

        // if char is space or pariod, don't do anything

    }
    // return object at end
    return result;

}
