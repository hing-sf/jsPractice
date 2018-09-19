// https://www.udemy.com/javascript-es6-tutorial/learn/v4/t/lecture/5417818?start=0

function balanceParens( str ) {
    // loop over char
    return !str.split('').reduce(( prev, char ) => {
        // if char is -1, close paren is starting which is should start with open paren
        if ( prev < 0 ) { return prev }
        // add 1 if open paren
        if ( char === '(') { return ++prev }
        // subtract 1 if closed paren
        if ( char === ')') { return --prev }
        return prev
    }, 0)
}

let parens = "()"
console.log(balanceParens( parens ));
