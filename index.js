
  // Write your algorithm here
  function hasTargetSum (array, target){
    for (let i = 0; i < array.length; i++){
      for (let j = i + 1; j < array.length; j++){
        if (array[i] + array[j] === target){
          return true;
        }
      }
    }
    return false;
    }



/*
  Add written explanation of your solution here
    so we should have two numbers from the array adding up to the target and return true, if no return false
    first we write a function called hasTargetSum that takes two arguments (array and target)
    we loop through the array and pick the first number in the pair(i = index)
    we loop through the array and pick the second number in the pair(j = index) j = i + 1 to avoid repeats and not to compare the same number twice
    we check if the pair sums to target
    return true if pair found 
    return false of pair not found


  // Write the Big O time complexity of your function here
  // O(n²) slow (one by one)

  //space complexity
  //0(1) fastest(accessing array index)


/* 
  Add your pseudocode here
  initailize an array hasTargetSum 
  iterate through each index & compare every possible pair of numbers in the array
  two itterations i & j
  check if their sum is equal to target
  return true if equal
  return false if not
*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
