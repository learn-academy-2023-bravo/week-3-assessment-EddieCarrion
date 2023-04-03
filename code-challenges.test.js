// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// I will create a "describe" statement that contains the function named "fib".
// I will create an "it" statement that will explain how the function will take in a variable and return a specific sequence.
// I will create two expects statments and use the provided variables as arguments and return the expected sequence

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe ("fib", () => {
  it ("will take in a number variable and return a fibobonacci sequence array", () => {
      expect (fib(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
      expect (fib(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
      
  })
})

// Good Failure
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.172 s



// b) Create the function that makes the test pass.

// Process
// First I will create a function named "fib" that takes in a number as a parameter
// The I will create a conditional statement to check if the number passed in the parameter are less than or equal to 2
// Next I will create an array that contains the first two elements of the sequence
// Next I will create a for loop that begins at the 2 index that does not go over the number given as the parameter
// Next I will use the push method to add the previous two numbers in the array.
// Finally I will call on the variable to make the test pass

const fib = (number) => {
  if (number <= 2) {
    return "number must be great than 2"
  }else {
    let fibSequence = [1,1]
    for (let i=2; i<number; i++) {
      fibSequence.push(fibSequence[i-1]+fibSequence[i-2])
    } 
    return fibSequence
  }
}

// Test passed

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.159 s, estimated 1 s

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.


// I will create a "describe" statement that contains the function named "studyMinutes".
// I will create an "it" statement that will explain how the function will take in an object and return an array of minutes studied from least to greatest
// I will create two expects statments and use the provided objects as arguments and return the expected sequence

describe ("studyMinutes", () => {
  it ("will take in an object and return an array of the number of minutes studied from least to greatest", () => {
      expect (studyMinutes(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
      expect (studyMinutes(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
      
      
  })
})

// Good Failure

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.177 s, estimated 1 s

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Process
// Create a function named "studyMinutes" that takes in an object as a parameter
// Next take the values from the object and store them in an array named "minutes"
// Next sort the values from least to greatest and store them into a variable named "organizedMinutes"
// Finally return the assorted array that contain the organized minutes


const studyMinutes = (object) =>{
  let minutes = Object.values(object)
  let organizedMinutes = minutes.sort((a,b)=> a - b)
  return organizedMinutes
}

// Test passed 


// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.14 s, estimated 1 s

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// I will create a "describe" statement that contains the function named "sum".
// I will create an "it" statement that will explain how the function will take in an array and return the accumulated sum.
// I will create three expects statments and use the provided variables as arguments and return the expected accumulated sum.

describe ("sum", () => {
  it ("will take in an array and return a accumulated number sum", () => {
      expect (sum(accountTransactions1)).toEqual([100, 83, 60, 51])
      expect (sum(accountTransactions2)).toEqual([250, 161, 261, 165])
      expect (sum(accountTransactions3)).toEqual([])
  })
})

// Good Failure

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.182 s, estimated 1 s
// Ran all test suites.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Process
// First I will create a function named "sum" that takes in an array as a parameter
// Next create variable that contains an empty array that will store the accumulated sum
// Next create another variable that will hold the accumulated sum after each step
// Next create a for loop that goes the entire length of the array that adds each element to the "total" variable and adds that value to the array
// Finally return the variable that contains the accumulated sum

const sum = (arr) => {
  
    let results = []
    let total = 0
    for (let i=0; i<arr.length; i++) {
      total += arr[i]
      results.push(total)
    } 
    return results
  
}

//test passed

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.167 s, estimated 1 s