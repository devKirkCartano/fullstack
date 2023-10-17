// Sum Array Exercise

// DEFINE YOUR FUNCTION BELOW:

function sumArray(numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}

sumArray([1, 2, 3]);
