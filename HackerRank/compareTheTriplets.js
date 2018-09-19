// user award points from 1 - 100
// 3 categories, clarity, originality, and difficulty
// define rating ex: a = (a[0], a[1], a[2])

// input type a = array and b = array
function compareTriplets(a, b) {
    var playersPoints = [ 0, 0 ];

    // loop over A
    for(var i = 0; i < a.length; i++){
        // if a and b is equal, return
        if(a[i] === b[i]){
            playersPoints
        }
        // if a is > than b, add 1 point to a
        else if ( a[i] > b[i] ) {
            playersPoints[0] += 1;
        }
        // else add 1 point to b
        else {
            playersPoints[1] += 1;
        }

    }

    // return playersPoints
    return playersPoints;

}

let a = [17, 28, 30];
let b = [47, 28, 10];

compareTriplets(a, b)