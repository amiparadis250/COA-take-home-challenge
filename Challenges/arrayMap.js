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
  