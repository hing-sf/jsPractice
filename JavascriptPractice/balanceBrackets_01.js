
function isValid(str){
    let bracketList = ['(',')','{','}','[',']']
    let input = str.split('');
    let brackets = [];

    for( var i = 0; i < input.length; i++ ){

        // check bracket type
        let idx = bracketList.indexOf( input[i] );
        let isOpenBracket = idx % 2 === 0;

        // check if isOpenBracket, push to bracket array
        if ( isOpenBracket ) {
            brackets.push( input[i] );
        }
        // check if closeBracket and length is graater than 0. closing bracket cannot be index 0 else return not balance
        else if ( !isOpenBracket && brackets.length > 0 ) {
            let lastIndex = brackets.pop();
            if ( bracketList[idx - 1] === lastIndex ) {
            } else {
                return 'Bracket not match last bracket';
            }
        }
        // return false
        else {
            return 'cannot start with closing bracket';
        }

    };

    // check if backets Array length, if 0 return balance parentheses
    return brackets.length === 0 ? 'Balance Parentheses' : 'NOT Balance';

  }

  let inputBracket = '({([])})'

console.log(isValid(inputBracket))
