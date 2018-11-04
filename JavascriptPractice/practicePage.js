// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax


// spread
var str = [1,2,3,4,5];
var chars = [...str,...str];
console.log(chars)

// rest

console.log(str[0], ...str)