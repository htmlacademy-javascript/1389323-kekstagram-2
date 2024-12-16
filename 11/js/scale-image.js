import {SCALE_CONSTANTS} from './constants.js';

const {min, max, step, defaultScale, unit, factor} = SCALE_CONSTANTS;
const scaleValue = document.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');
const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');

let scaleValueNumber = defaultScale();

const render = () => {
  scaleValue.value = `${scaleValueNumber}${unit}`;
  imageUploadPreview.style.transform = `scale(${(scaleValueNumber) * factor})`;
};

const onScaleSmallerClick = () => {
  scaleValueNumber = (scaleValueNumber > min) ? scaleValueNumber - step : min;
  render();
};

const onScaleBiggerClick = () => {
  scaleValueNumber = (scaleValueNumber < max) ? scaleValueNumber + step : max;
  render();
};

scaleSmaller.addEventListener('click', onScaleSmallerClick);
scaleBigger.addEventListener('click', onScaleBiggerClick);

const scaleReset = () => {
  scaleValueNumber = defaultScale();
  render();
};

scaleReset();

export {scaleReset};


