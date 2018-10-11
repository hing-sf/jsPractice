let a = "";
let b = "";

function buddyStrings(A, B) {
	let aSplit = A.split(""),
		bSplit = B.split(""),
		notMatchIdx = [];

    console.log(!Boolean(A))
    console.log(!Boolean(B))
	if ( bSplit.length === 2 ) {
        console.log('count 2')
		return bSplit.reverse().toString() === aSplit.toString();
	}

    if ( !Boolean(A) || !Boolean(B) ) {
        console.log('empty')
		return false;
	}

	for (let i = 0; i < aSplit.length; i++) {
		if (notMatchIdx.length > 2) {
			return false;
		}
        if ( aSplit[i] != bSplit[i] ) {
            notMatchIdx.push(i)
        }
	}

    if(notMatchIdx.length === 2){
        let temp = bSplit[notMatchIdx[0]];
        bSplit[notMatchIdx[0]] = bSplit[notMatchIdx[1]]
        bSplit[notMatchIdx[1]] = temp
        console.log('to the end')
        return aSplit.toString() == bSplit.toString();
    }



}

console.log(buddyStrings(a, b));
