function validAnagram(a, b) {
  let aList = {}
  let bList = {}
  if(a.length !== b.length) return false

  for(let el of a){
    aList[el] = (aList[el] || 0) + 1
  }

  for (let el of b) {
    bList[el] = (bList[el] || 0) + 1;
  }

for (const key in aList) {
    if (aList[key] !== bList[key]) return false;
    if (aList[key] !== bList[key]) return false;
}

  return true
}

const a = 'azz'
const b = 'azz'

const x = validAnagram(a,b)
console.log('x', x);

