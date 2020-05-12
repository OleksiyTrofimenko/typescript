// Return array with repeatable numbers
const someArray = [1, 2, 3, 1, 4, 5, 6, 1, 2, 3, 7, 8];

const getSimilarNumbers = (arr) => {
  const numberData = {};
  let similarNumbers = [];

  for (let i = 0; i < arr.length; i++) {
    const activeNumber = arr[i];

    if (!numberData[activeNumber]) {
      numberData[activeNumber] = 1;
    } else {
      numberData[activeNumber]++;
    }
  }

  for (let char in numberData) {
    if (numberData[char] !== 1) {
      similarNumbers = [...similarNumbers, Number(char)];
    }
  }

  return similarNumbers;
};

getSimilarNumbers(someArray);

// Reverse string
const string = 'abby';

const getReservesString = (str) => str.split('').reverse().join('');

getReservesString(string);

// Check if the word is an anagram
const someWord = 'amma';

const isAnAnagram = (word) => {
  const reversedWord = word.split('').reverse().join('');

  return word === reversedWord;
};

isAnAnagram(someWord);
