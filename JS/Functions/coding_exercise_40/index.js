// Last Element Exercise

// DEFINE YOUR FUNCTION BELOW:

function lastElement(numbers) {
  if (numbers.length === 0) {
    return null;
  } else {
    const lastIndex = numbers.length - 1;
    return numbers[lastIndex];
  }
}

lastElement([1, 2, 5]);
