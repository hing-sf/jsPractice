const arr = [1,1,2,3];

function areThereDuplicates(arr) {
 const obj = {};
if(arr.length === 0) return false
for(let el of arr){
  if(obj[el]) {
    return true
  } else {
    obj[el] = 1
  }
}
return false
}

// console.log('has duplicate: ',areThereDuplicates(arr));

function areThereDuplicatesMulti(arr) {
let start = 0;
let next = 1;

while(next < arr.length){
  if(arr[start] === arr[next]){
    return true
  }
  start++
  next++
}
return false
}

areThereDuplicatesMulti(arr)
console.log('has duplicate: ',areThereDuplicatesMulti(arr));


