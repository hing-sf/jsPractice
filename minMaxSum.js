let arr = [1, 2, 3, 4, 5]

function miniMaxSum( arr ){
    let minSum;
    let maxSum = 0;
    // console.log(Boolean(minSum))
    for(let i = 0; i < arr.length; i++){
        let tempSum = 0;

        for(let j = 0; j < arr.length; j++){
            if( j !== i ){
                tempSum += arr[j]
            }
        }
        if( tempSum > maxSum){
            maxSum = tempSum;
        }

        if( tempSum < minSum || !minSum){
            minSum = tempSum;
        }
    }

    console.log(minSum, maxSum)
}

console.log(miniMaxSum( arr ))