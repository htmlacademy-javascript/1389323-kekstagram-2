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


//task 4
const timeInMinutes = (timeInHours = '') => timeInHours.split(':')
  .map((element, indexElement) => (indexElement === 0) ? parseInt(element, 10) * 60 : parseInt(element, 10))
  .reduce((totalMinutes, time) => totalMinutes + time);

const isMeetInLimit = (beginWorkingDay, endWorkingDay, startMeet, durationMeet = 0) => {
  const beginWorkingDayInMinutes = timeInMinutes(beginWorkingDay);
  const endWorkingDayInMinutes = timeInMinutes(endWorkingDay);
  const startMeetInMinutes = timeInMinutes(startMeet);
  const endMeetInMinutes = startMeetInMinutes + durationMeet;

  return (startMeetInMinutes >= beginWorkingDayInMinutes && endMeetInMinutes <= endWorkingDayInMinutes);
};

isMeetInLimit('08:00', '17:30', '14:00', 90); //true
isMeetInLimit('8:0', '10:0', '8:0', 120); //true
isMeetInLimit('08:00', '14:30', '14:00', 90); //false
isMeetInLimit('14:00', '17:30', '08:0', 90); //false
isMeetInLimit('8:00', '17:30', '08:00', 900); //false


