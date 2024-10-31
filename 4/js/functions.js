//task 1
const checkStringLenght = (text, maxLength) => text.length <= maxLength;

//task 2
const checkPalindrome = (text) => {
  const userString = text.replaceAll(' ', '').toLowerCase();
  let palindrome = '';

  for (let i = 0; i < userString.length; i++) {
    palindrome += userString.at(userString.length - 1 - i);
  }
  return palindrome === userString;
};

//task 3
const getPozitiveInteger = function(text) {
  const userString = String(text).replaceAll(' ', '');
  let number = '';
  for (let i = 0; i < userString.length; i++) {
    if (!Number.isNaN(userString.at(i) * 1)) {
      number += userString.at(i);
    }
  }

  return parseInt(number, 10);
};


