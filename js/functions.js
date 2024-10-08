//task 1
const checkStringLenght = (string, maxLength) =>
  string.length <= maxLength;

//task 2
const checkPalindrome = (string) => {
  const userString = string.replaceAll(' ', '').toLowerCase();
  let palindrome = '';
  let isPalindrom = false;

  for (let i = 0; i < userString.length; i++) {
    palindrome += userString.at(userString.length - 1 - i);
  }

  isPalindrom = (palindrome === userString);

  return isPalindrom;
};

//task 3
const getPozitiveInteger = function(string) {
  const userString = String(string).replaceAll(' ', '');
  let number = '';
  for (let i = 0; i < userString.length; i++) {
    if (!Number.isNaN(userString.at(i) * 1)) {
      number += userString.at(i);
    }
  }

  number = parseInt(number, 10);

  return number;
};


