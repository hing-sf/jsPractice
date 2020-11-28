let numbers = [1,2 ,3, 4, 4, 5, 5, 5]

function unique(array) {
  return array.reduce((uniqueArr, currentNum) => {
    if (! uniqueArr.find(num => num === currentNum)) {
        uniqueArr.push(currentNum);
    }

    return uniqueArr;
  }, []);
}

unique(numbers)