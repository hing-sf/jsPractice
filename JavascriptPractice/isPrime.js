// is Prime # 2, 3, 5, 7

let isPrime = (n) => {
    if( n === 2) {
        return true;
    }

    if( !Number.isInteger(n) || n < 2 || ! ( n % 2 ) ) {
        return false;
    }

    let ctr = 0;
    for(let i = 3; i <= Math.sqrt(n) ; i++, i++){
        ctr++;
        if( n % i === 0 ){
            console.log(`crt: ${ctr}`);
            return false;
        }
    }
    console.log(`crt: ${ctr}`);
    return true;
}

console.log(isPrime(101))
// for(let i = 0; i < 30; i++) {
//     if( isPrime(i) ){
//         console.log(i);
//     }
// }