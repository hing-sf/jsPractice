function countUniqueValues(arr) {
  // arr must be sorted
  const length = arr.length
  let i = 0;

  // return arr length if arr is <= 1
  if(length === 0) return 0

  // have 2 pointer
  // if pointer 1 is === to pointer 2,
  // pointer 1++
  // pointer 1 = to pointer 2 value
  // pointer 2 ++
  for (let j = 0; j < length; j++) {
    if(arr[i] !== arr[j]){
      i++
      arr[i] = arr[j]
    }
  }


    return {array: arr, i : i + 1}
}

const arr = [1,2,3,3, 3, 5, 6, 6, 7]
const value = countUniqueValues(arr)
console.log('value', value);
