const scaleUploadImage = document.querySelector('.img-upload__scale');
//const scaleSmaller = scaleUploadImage.querySelector('.scale__control--smaller');
//const scaleBigger = scaleUploadImage.querySelector('.scale__control--bigger');
const scaleValue = scaleUploadImage.querySelector('.scale__control--value');
const imageUploadPreview = document.querySelector('.img-upload__preview img');

const SCALE_VALUE_DEFAULT = '100%';
const SCALE_VALUE_MIN = '25%';
const SCALE_VALUE_MAX = '100%';
const SCALE_VALUE_STEP = 25;

const scaleValueNumber = (scale) => Number(scale.replace('%', ''));
scaleValue.value = SCALE_VALUE_DEFAULT;

const changeScale = (scale = SCALE_VALUE_DEFAULT) => {
  imageUploadPreview.style.transform = `scale(${scaleValueNumber(scale) / 100})`;
};

const onScaleSmallerClick = () => {
  scaleValue.value = (scaleValue.value === SCALE_VALUE_MIN) ? SCALE_VALUE_MIN : `${scaleValueNumber(scaleValue.value) - SCALE_VALUE_STEP }%`;
  changeScale(scaleValue.value);
  return scaleValue.value;
};

const onScaleBiggerClick = () => {
  scaleValue.value = (scaleValue.value === SCALE_VALUE_MAX) ? SCALE_VALUE_MAX : `${scaleValueNumber(scaleValue.value) + SCALE_VALUE_STEP }%`;
  changeScale(scaleValue.value);
  return scaleValue.value;
};

export {onScaleSmallerClick, onScaleBiggerClick, changeScale, SCALE_VALUE_DEFAULT};


