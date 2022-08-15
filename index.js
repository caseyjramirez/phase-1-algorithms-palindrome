function isPalindrome(word) {
  let isSame = true
  const forwards = []
  const backwards = []

  for (let letter of word) {
    forwards.push(letter)
    backwards.unshift(letter)
  }
  
  for (let i = 0; i < forwards.length; i++) {
    if(forwards[i] !== backwards[i]) {isSame = false}
  }

  return isSame
}


/* 
  Rewrite the problem in your own words
  
  when given a string, the Palidrome function will reverse the sequence of letters in that string and see if it is the same as the original input
*/




/* 
  Add your pseudocode here

  function that recieves a string
  two arrays are created one for the letters in normal fashion
  the other for the letters backwards
  then there is a for.. of loop iterates over each letter of that string and pushes/unshifts to the respective array
  Each element of the two arrays are compared against one another
  if they are the same return true
  else return false
*/

/*
  Add written explanation of your solution here
  
  to begin a flag called isSame was initialized with the value of true
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log(isPalindrome("car"));
  console.log("Expecting: true");
  console.log(isPalindrome("bob"));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
