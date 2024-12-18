import {SCALE_CONSTANTS} from './constants.js';

const {MIN, MAX, STEP, DEFAULT_SCALE, UNIT, FACTOR} = SCALE_CONSTANTS;
const scaleValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');

let scaleValueNumber = DEFAULT_SCALE();

const render = () => {
  scaleValue.value = `${scaleValueNumber}${UNIT}`;
  imageUploadPreview.style.transform = `scale(${(scaleValueNumber) * FACTOR})`;
};

const onScaleSmallerClick = () => {
  scaleValueNumber = (scaleValueNumber > MIN) ? scaleValueNumber - STEP : MIN;
  render();
};

const onScaleBiggerClick = () => {
  scaleValueNumber = (scaleValueNumber < MAX) ? scaleValueNumber + STEP : MAX;
  render();
};

scaleSmaller.addEventListener('click', onScaleSmallerClick);
scaleBigger.addEventListener('click', onScaleBiggerClick);

const scaleReset = () => {
  scaleValueNumber = DEFAULT_SCALE();
  render();
};

scaleReset();

export {scaleReset};


