function mergeStrings(a, b) {
    let mergedArray = [],
        mergedString,
        arrA = a.split(''),
        arrB = b.split(''),
        longerArrLength = arrA.length > arrB.length ? arrA.length : arrB.length;

    for(let i = 0; i < longerArrLength; i++){
        if(arrA[i] !== undefined){
            mergedArray.push(arrA[i]);
            mergedArray.push(arrB[i]);
        } else {
            mergedArray.push(arrB[i]);
        }

    }

    return mergedString = mergedArray.join('')

}
let a = 'abc',
    b = 'abcdefg';

console.log(mergeStrings(a,b));