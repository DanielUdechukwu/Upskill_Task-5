
// Task 1 - Fahrenheit to Celsius
// 0 celsius = 32 fahrenheit

function TempConverter(Fahrenheit) {
  let defFahrenheit = 32
  let multiplier = 5/9

  let calcValue = (Fahrenheit - defFahrenheit) * multiplier
  return calcValue.toFixed(2)
}
const Temp = TempConverter(60)
console.log(Temp + " Celsius")

// Task 2 - Average numbers in an array

function ArrayAverage(myArr) {
  // let myArr = 
  let sum = 0
  // console.log(myArr.length - 1)
  for(let i = 0; i <= myArr.length - 1; i++) {
    sum += myArr[i]
    // console.log(sum)
  }
  return sum / (myArr.length)
}

const checkArray = ArrayAverage([2, 4, 5, 9, 10, 15, 34, 101]);
console.log("Average of array = " + checkArray)

// Task 3 - Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function DivideNum(n, x, y){
  if(x < 0 || y < 0 || n < 0){
    return false
  }else{
    if(n % x == 0 && n % y == 0){
      return (n + " is divisible by " + x + " and " + y)
    }else if (n % x == 0 && n % y !== 0){
      return (n + "is divisible by " + x + " and not by " + y)
    }else if (n % x !== 0 && n % y === 0){
      return (n + " is not divisible by " + x + " but is divisible by " + y)
    }else{
      return (n + " is not divisible by both " + x + " and " + y)
    }
  }
}

const checkDivisor = DivideNum(15, 7, 3);
console.log(checkDivisor)

// TASK 4 - Create a function that will output the first 100 prime numbers

function first100Primes() {
  const primeArr = []
  let startNum = 2

  while (primeArr.length < 100) {
    if (isPrime(startNum)) {
      primeArr.push(startNum)
    }
    startNum++
  }
  return primeArr
}

function isPrime (startNum) {
  if(startNum === 2){
    return true
  }

  if(startNum < 2 || startNum % 2 === 0){
    return false
  }

  for (let i = 3; i <= Math.sqrt(startNum); i += 2){
    if(startNum % i === 0){
      return false
    }
  }
  return true
}

const prime100 = first100Primes()
console.log(prime100)

// Task 5 - Create a function that will return a boolean specifying if a number is a prime number. 

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

const primeNumbers = isPrime(6);
console.log(primeNumbers);

// Task 6 - Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

const arrayCheck = (randomArray) => {
  let result = randomArray.filter(m => m % 2 === 0)
  return result
}

const positiveArr = arrayCheck([2, 3, 4, 5, 6, 7, 98, 1024, 2048, 241, 301, 202])
console.log(positiveArr)


// Task 7 - Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

const FizzBuzz = (n) => {
  for(let i = 1; i <= n; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz")
    }else if(i % 5 === 0){
      console.log("Buzz")
    }else if(i % 3 === 0){
      console.log("Fizz")
    }else{
      console.log(i)
    }
  }
}

FizzBuzz(100);

// Task 8 - Hashtag Generator

const HastTagGenerator = (HashText) => {
  if(HashText.length > 140){
    return false

  }else if(HashText.length === 0){
    return false

  }else{
    const splitWords = HashText.split(" ")
    
    for(let i = 0; i < splitWords.length; i++){
      let capitalize = splitWords[i][0].toUpperCase()
      let replace = splitWords[i][0]
      splitWords[i] = splitWords[i].replace(replace, capitalize)
    }
    
    let genetatedHash = "#" + splitWords.join("")
    return genetatedHash
  }
}

console.log(HastTagGenerator("welcome back to school"))


// Learning map method

// let myArr = ["apple", "pear", "daniel"]
// let text = "Welcome to school"
// let textArr = text.split(" ")
// console.log(textArr)
// let xx = textArr.map(x => x[0].toUpperCase() + textArr.push(x))
// console.log(xx)

// splitWords[i] = splitWords[i][0].toUpperCase() + splitWords[i].substr(1)
// let capString = splitWords.join("")
// console.log(capString)
// let textTrim = capString.replace(/\s+/g, "");
// let genetatedHash = "#" + textTrim