function sameFrequency(a, b) {
  // good luck. Add any arguments you deem necessary.
  if (a.length !== b.length) return false;

  let setA = {};
  let setB = {};

  for (let item of a) {
    setA[item] = setA[item] + 1 || 1;
  }

  for (let item of b) {
    setB[item] = setB[item] + 1 || 1;
  }

  for (let key in setA){
    if( setB[key] !== setA[key]){
      return false
    }

  }
  return true
}

const x = sameFrequency('abc', 'cbaa');


