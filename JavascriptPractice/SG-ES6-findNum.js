// Complete the findNumber function below.
function findNumber(arr, k) {
    for(let idx of arr){
        if(arr[idx] === k){
            return 'YES'
        }
    }
    return 'NO'

}

let a = [1,2,3,4,5,8],
    k = 5;

console.log(findNumber(a, k))