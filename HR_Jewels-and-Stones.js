// You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

let J = 'aA';
let S = 'aAAbbbb';
var numJewelsInStones = function(J, S) {
    var myStones = S.split('');
    var stoneTypes = J.split('');
    var stoneEqJewel = [];

    for(var i = 0; i < myStones.length; i++ ){
        for ( var j = 0; j < stoneTypes.length; j++){
            if(myStones[i] === stoneTypes[j] ) {
                stoneEqJewel.push(myStones[i])
            }
        }
    }
    return stoneEqJewel.length
};

numJewelsInStones(J, S)