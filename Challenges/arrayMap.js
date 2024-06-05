const hasSubarrayWithSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        if (sum === target) return true;
      }
    }
    return false;
  };

  //test suit cases

  console.log(hasSubarrayWithSum([1, 0, 2, 3, 4], 3));
  console.log(hasSubarrayWithSum([1, 0, 2, 3, 4], 7));
  console.log(hasSubarrayWithSum([1, 0, 2, 3, 4], 6));
  console.log(hasSubarrayWithSum([1, 0, 2, 3, 4], 5));
  console.log(hasSubarrayWithSum([1, 0, 2, 3, 4], 4));
  console.log(hasSubarrayWithSum([1, 0, 2, 3, 4], 2));
  console.log(hasSubarrayWithSum([1, 0, 2, 3, 4], 1000000));
  