let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
function findLongestWord(array) {
  return [...array].sort((a, b) => a.length - b.length).pop();
}
findLongestWord(words);
// - Convert the above array "words" into an array of length of word instead of word.
let wordsLength = words.map((w) => w.length);
// - Create a new array that only contains word with atleast one vowel.
function checkVowel(words) {
  return words.toLowerCase().include("a") ||
    words.toLowerCase().include("e") ||
    words.toLowerCase().include("i") ||
    words.toLowerCase().include("o") ||
    words.toLowerCase().include("u"); 
}
let vowelFilter = words.filter((w) => checkVowel(w));
// - Find the index of the word "rhythm"
 words.findIndex((w) => w == "rhythem");
// - Create a new array that contians words not starting with vowel.
let notWithVowel = words.filter((w) => !checkVowel(w[0]));
// - Create a new array that contianse words not ending with vowel
let notEndingWithVowel = words.filter((w) => !checkVowel(w[w.length - 1]));


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(array) {
  return array.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  }, 0);
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
let multiplyByThree = numbers.filter((num) => num % 3 === 0);
// - Create a new array that contains only even numbers
let evenNum = numbers.filter((num) => num % 2 === 0);
// - Create  a new array that contains only odd numbers.
let oddNum = numbers.filter((num) => num % 2 !== 0);
// - Create a new array that should have true for even number and false for odd numbers.
let oddOrEven = numbers.map((num) => num % 2 === 0);
// - Sort the above number in assending order.
let sortedNumber = [...numbers].sort((a, b) => a - b);
// - Does sort mutate the original array?
//Yes;
// - Find the sum of the numbers in the array.
let sum = numbers.reduce((acc, cv) => {
  acc = acc + cv;
  return acc;
}, 0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(array) {
  return array.reduce((acc, cv) => {
    acc = acc + cv;
    return acc;
  }, 0) / array.length
}
let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words) {
  return (
    words.map((w) => w.length).reduce((acc, cv) => {
      return acc + cv;
    }, 0) / words.length
  );
}
