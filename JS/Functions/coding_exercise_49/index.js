// Filter Exercise

function validUserNames(usernames) {
  // your code here
  return usernames.filter((name) => {
    return name.length < 10 
  });
}

// function validUserNames(arr) {
//   const filteredArr = arr.filter(function (name) {
//     return name.length < 10;
//   });
//   return filteredArr;
// }

// function validUserNames(arr) {
//   return arr.filter((name) => name.length < 10);
// }

